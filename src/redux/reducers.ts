import { combineReducers } from 'redux';

import {
    IUser,
    ActionsInterfaces,
} from '@interfaces/interfaces';
import { ActionTypes } from '@redux/actions';

const usersListReducer = (state: IUser[] = [], action: ActionsInterfaces.IUpdateUsersList): IUser[] => {
    switch (action.type) {
        case ActionTypes.UPDATE_USERS_LIST:
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    usersList: usersListReducer,
});
