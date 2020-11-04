import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import AppBar from '@material-ui/core/AppBar';

import { IUser } from '@interfaces/interfaces';
import { setUserInUsersListIsChecked } from '@redux/actions';
import { selectCheckedUsers } from '@redux/selectors';
import { ContainerMedium } from '@components';

const useUserListFooterStyles = makeStyles(
    (theme: Theme) => createStyles({
        footer: {
            top: 'auto',
            bottom: 0,
        },
        contentWrapper: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0.5),
            height: theme.spacing(8),
        },
        chip: {
            margin: `0 ${theme.spacing(0.25)}px`,
        },
    }),
);

interface ICheckedUser {
    user: IUser;
}

const CheckedUser: FunctionComponent<ICheckedUser> = ({ user }) => {
    const classes = useUserListFooterStyles();

    const { id: userId, name } = user;

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(setUserInUsersListIsChecked(userId, false));
    };

    return (
        <Chip
            label={name}
            className={classes.chip}
            onDelete={handleDelete}
            variant="outlined"
            size="small"
        />
    );
};

const UsersListFooter: FunctionComponent = () => {
    const classes = useUserListFooterStyles();

    let checkedUsers = useSelector(selectCheckedUsers);
    let isOverlapping = false;

    if (checkedUsers.length > 10) {
        isOverlapping = true;
        checkedUsers = checkedUsers.slice(0, 10);
    }

    return (
        <AppBar
            position="fixed"
            color="default"
            className={classes.footer}
        >
            <ContainerMedium>
                <div className={classes.contentWrapper}>
                    {checkedUsers.map(user => (
                        <CheckedUser
                            key={user.id}
                            user={user}
                        />
                    ))}

                    {isOverlapping && (
                        <Chip
                            disabled
                            label="And more..."
                            className={classes.chip}
                            variant="outlined"
                            size="small"
                        />
                    )}
                </div>
            </ContainerMedium>
        </AppBar>
    );
};

export default UsersListFooter;