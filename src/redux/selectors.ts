import { createSelector } from 'reselect';

import { IAppState } from '@interfaces/interfaces';

// as you use reselect in production I've decided to try it

export const selectUsersList = ({ usersList }: IAppState) => usersList;

export const selectUsersListLength = createSelector(
    selectUsersList,
    usersList => usersList.length,
);

export const selectCheckedUsers = createSelector(
    selectUsersList,
    usersList => usersList.filter(({ isChecked }) => isChecked),
);

export const selectCheckedUsersNumber = createSelector(
    selectCheckedUsers,
    checkedUsers => checkedUsers.length,
);
