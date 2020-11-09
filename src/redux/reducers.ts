import { combineReducers } from 'redux';

import {
    IUser,
    ActionsInterfaces,
    FetchError,
} from '@interfaces/interfaces';
import { ActionTypes } from '@redux/actions';

const fetchErrorReducer = (
    state = null,
    action: ActionsInterfaces.IUpdateFetchError,
): FetchError => {
    switch (action.type) {
        case ActionTypes.UPDATE_FETCH_ERROR:
            return action.payload;
        default:
            return state;
    }
};

const usersListReducer = (
    state: IUser[] = [],
    action: ActionsInterfaces.IUpdateUsersList | ActionsInterfaces.IUpdateUserInUsersList,
): IUser[] => {
    switch (action.type) {
        case ActionTypes.UPDATE_USERS_LIST:
            return action.payload;
        case ActionTypes.UPDATE_USER_IN_LIST:
            const { payload: changedUser } = action;
            // we cant modify state object itself since redux makes shallow comparison
            const newUsersList = [...state];
            // iterate over usersList and find changed one
            state.map((user, index) => {
                // we can use it since this are UUIDs
                if (user.id === changedUser.id) {
                    newUsersList.splice(index, 1, changedUser);
                }
            });
            return newUsersList;
        default:
            return state;
    }
};

export default combineReducers({
    fetchError: fetchErrorReducer,
    usersList: usersListReducer,
});
