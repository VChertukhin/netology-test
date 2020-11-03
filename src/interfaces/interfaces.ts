import { ActionTypes } from '@redux/actions';

export interface IUser {
    id: string;
    name: string;
    surname: string;
    age: number;
    /* flag used to detect whether user is selected in list */
    isChecked?: boolean;
}

export namespace ActionsInterfaces {
    export interface IUpdateUsersList {
        type: ActionTypes.UPDATE_USERS_LIST;
        payload: IUser[];
    }

    export interface IFetchUsersList {
        type: ActionTypes.FETCH_USERS;
        /* number of users to fetch */
        payload: number;
    }

    export interface IUpdateUserInUsersList {
        type: ActionTypes.UPDATE_USER_IN_LIST;
        payload: IUser;
    }
}

export interface IAppState {
    usersList: IUser[];
}
