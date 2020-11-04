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
    UPDATE_USER_IN_LIST = 'UPDATE_USER_IN_USERS_LIST',
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

/**
 * @param user - changed user (if user with this id doesn't exist in store -> nothing will happen)
 */
export const updateUserInUsersList = (user: IUser): ThunkAction<Promise<void>, IAppState, null, ActionsInterfaces.IUpdateUsersList> => (
    async (dispatch, getState) => {
        const { usersList: prevUsersList } = getState();

        prevUsersList.map((prevUser, index) => {
            // we can use it since this are UUIDs
            if (prevUser.id === user.id) {
                // make a copy -> change element
                const usersList = [...prevUsersList];
                usersList.splice(index, 1, user);

                dispatch(updateUsersList(usersList));
            }
        });
    }
);

export const updateUsersListIsCheckedForAll = (isChecked: boolean): ThunkAction<Promise<void>, IAppState, null, ActionsInterfaces.IUpdateUsersList> => (
    async (dispatch, getState) => {
        const { usersList: prevUsersList } = getState();

        const usersList = prevUsersList.map(user => ({ ...user, isChecked }));

        dispatch(updateUsersList(usersList));
    }
);

/**
 * @param id - changed user (if user with this id doesn't exist in store -> nothing will happen)
 * @param isChecked - new isChecked value
 */
export const setUserInUsersListIsChecked = (userId: string, isChecked: boolean): ThunkAction<Promise<void>, IAppState, null, ActionsInterfaces.IUpdateUsersList> => (
    async (dispatch, getState) => {
        const { usersList: prevUsersList } = getState();

        prevUsersList.map((prevUser, index) => {
            // we can use it since this are UUIDs
            if (prevUser.id === userId) {
                // make a copy -> change element
                const usersList = [...prevUsersList];
                usersList.splice(index, 1, { ...prevUser, isChecked });

                dispatch(updateUsersList(usersList));
            }
        });
    }
);
