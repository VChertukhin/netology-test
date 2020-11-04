import React, { FunctionComponent } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Checkbox from '@material-ui/core/Checkbox';

import { ContainerMedium } from '@components';

const UsersListHeader: FunctionComponent = () => {
    return (
        <AppBar position="fixed" color="default">
            <ContainerMedium>
                <ListItem>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={false}
                            tabIndex={-1}
                            disableRipple
                        />
                    </ListItemIcon>

                    <ListItemText primary="Select all" />

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
