import { ThunkAction } from 'redux-thunk';

import {
    IUser,
    IAppState,
    ActionsInterfaces,
} from '@interfaces/interfaces';
import { fetchUsers } from '@services/usersService';

// may be splitted to constants.ts later
export enum ActionTypes {
    UPDATE_USERS_LIST = 'UPDATE_USERS_LIST',
    FETCH_USERS = 'FETCH_USERS',
}

export const updateUsersList = (usersList: IUser[]): ActionsInterfaces.IUpdateUsersList => ({
    type: ActionTypes.UPDATE_USERS_LIST,
    payload: usersList,
});

// TODO: usedateUserInUsersList action

// side effect to fetch users
export const fetchUsersList = (number: number): ThunkAction<Promise<void>, IAppState, null, ActionsInterfaces.IUpdateUsersList> => (
    async (dispatch) => {
        const usersList = await fetchUsers(number);

        dispatch({
            type: ActionTypes.UPDATE_USERS_LIST,
            payload: usersList,
        });
    }
);
