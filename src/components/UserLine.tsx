import React, { FunctionComponent } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { IUser } from '@interfaces/interfaces';

interface IUserLineProps {
    index?: number;
    style?: React.CSSProperties;
    user: IUser;
}

// yet it's just a bolierplate
const UserLine: FunctionComponent<IUserLineProps> = ({ index, style, user }) => {
    return (
        <ListItem button style={style}>
            <ListItemText
                primary={`User [${index ? index + 1 : ''}]: ${user.name} ${user.surname} - ${user.age}`}
            />
        </ListItem>
    )
};

export default UserLine;
