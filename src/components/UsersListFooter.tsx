import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import AppBar from '@material-ui/core/AppBar';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { selectCheckedUsers } from '@redux/selectors';
import { ContainerMedium } from '@components';
import { CheckedUser } from '@components/footer';
import { scrollTableTopEvent } from '@utils/utils';
import { Toolbar } from '@material-ui/core';

const useUserListFooterStyles = makeStyles(
    (theme: Theme) => createStyles({
        footer: {
            top: 'auto',
            bottom: 0,
        },
        fabButton: {
            position: 'absolute',
            zIndex: 1,
            top: -20,
            right: 40,
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

const ScrollTopFab: FunctionComponent = () => {
    const classes = useUserListFooterStyles();
    // we'll fire event that will move us to the table top
    const handleClick = () => (
        document.dispatchEvent(scrollTableTopEvent)
    );

    return (
        <Tooltip
            title="Scroll to the table top"
            placement="top"
        >
            <Fab
                color="primary"
                size="small"
                onClick={handleClick}
                className={classes.fabButton}
            >
                <KeyboardArrowUpIcon />
            </Fab>
        </Tooltip>
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
        <>
            <Toolbar />

            <AppBar
                position="fixed"
                color="default"
                className={classes.footer}
            >
                <ScrollTopFab />

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
        </>
    );
};

export default UsersListFooter;
