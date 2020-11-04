import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Checkbox from '@material-ui/core/Checkbox';

import { updateUsersListIsCheckedForAll } from '@redux/actions';
import { selectUsersListLength, selectCheckedUsersNumber } from '@redux/selectors';
import { ContainerMedium } from '@components';

const UsersListHeader: FunctionComponent = () => {
    const dispatch = useDispatch();

    const usersListLength = useSelector(selectUsersListLength);
    const checkedUsersNumber = useSelector(selectCheckedUsersNumber);

    const selectedNumberRatio = `(${checkedUsersNumber}/${usersListLength})`;
    // if all users are checked
    const isChecked = usersListLength === checkedUsersNumber;

    const handleChecked = () => {
        if (checkedUsersNumber < usersListLength) {
            // select all then
            dispatch(updateUsersListIsCheckedForAll(true));
        } else {
            // deselect all
            dispatch(updateUsersListIsCheckedForAll(false));
        }
    };

    return (
        <AppBar position="fixed" color="default">
            <ContainerMedium>
                <ListItem>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={isChecked}
                            onChange={handleChecked}
                            tabIndex={-1}
                            disableRipple
                        />
                    </ListItemIcon>

                    <ListItemText primary={`Select all ${selectedNumberRatio}`} />

                    <ListItemText
                        primary={'Netology test App'}
                        primaryTypographyProps={{
                            align: 'right',
                            variant: 'h6',
                        }}
                    />
                </ListItem>
            </ContainerMedium>
        </AppBar>
    );
};

export default UsersListHeader;
