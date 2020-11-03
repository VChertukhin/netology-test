import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { IUser } from '@interfaces/interfaces';
import { updateUserInUsersList } from '@redux/actions';

interface IUserLineProps {
    index?: number;
    style?: React.CSSProperties;
    user: IUser;
}

// yet it's just a bolierplate
const UserLine: FunctionComponent<IUserLineProps> = ({ index, style, user }) => {
    const { name, surname, age, isChecked } = user;
    const dispatch = useDispatch();

    const handleChange = () => (
        dispatch(updateUserInUsersList({ ...user, isChecked: !isChecked }))
    );

    return (
        <ListItem button style={style}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={isChecked}
                    onChange={handleChange}
                    tabIndex={-1}
                    disableRipple
                />
            </ListItemIcon>

            <ListItemText
                primary={`User [${index ? index + 1 : ''}]: ${user.name} ${user.surname} - ${user.age}`}
            />
        </ListItem>
    );
};

export default UserLine;
