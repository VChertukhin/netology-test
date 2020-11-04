import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { IAppState } from '@interfaces/interfaces';
import { fetchUsersList } from '@redux/actions';
import { selectUsersList } from '@redux/selectors';
import { Loader, UserLine } from '@components';

const useUsersListStyles = makeStyles(
    (theme: Theme) => createStyles({
        usersList: {
            marginTop: theme.spacing(8), // app bar
            width: '100%',
            height: `calc(100vh - ${theme.spacing(8)}px)`,
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

const UsersList: FunctionComponent = () => {
    const classes = useUsersListStyles();

    const usersList = useSelector(selectUsersList);
    const dispatch = useDispatch();

    // did mount effect
    useEffect(() => {
        // YES! we will work with list of 5000 elements!
        dispatch(fetchUsersList(5000));
    }, []);

    const renderLine = ({ index, style }: ListChildComponentProps) => {
        const user = usersList[index];

        return (
            <UserLine
                key={user.id}
                style={style}
                user={user}
            />
        );
    };

    if (usersList.length === 0) {
        return <Loader />;
    }

    return (
        <div className={classes.usersList}>
            <AutoSizer>
                {({ height, width }) => (
                    <FixedSizeList
                        height={height}
                        width={width}
                        itemSize={46}
                        itemCount={usersList.length}
                    >
                        {renderLine}
                    </FixedSizeList>
                )}
            </AutoSizer>
        </div>
    );
};

export default UsersList;
