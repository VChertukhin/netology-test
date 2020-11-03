import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { IAppState } from '@interfaces/interfaces';
import { fetchUsersList } from '@redux/actions';
import { Loader, UserLine } from '@components';

const useUsersListStyles = makeStyles(
    (theme: Theme) => createStyles({
        root: {
            width: '100%',
            height: '100%',
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

const UsersList: FunctionComponent = () => {
    const classes = useUsersListStyles();

    const usersList = useSelector(({ usersList }: IAppState) => usersList);
    const dispatch = useDispatch();

    // did mount effect
    useEffect(() => {
        // YES! we will work with list of 5000 elements!
        dispatch(fetchUsersList(5000));
    }, []);

    useEffect(() => {
        console.log(usersList);
    }, [usersList]);

    const renderLine = ({ index, style }: ListChildComponentProps) => {
        const user = usersList[index];

        return (
            <UserLine
                key={user.id}
                index={index}
                style={style}
                user={user}
            />
        );
    };

    if (usersList.length === 0) {
        return <Loader />;
    }

    return (
        <div className={classes.root}>
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
