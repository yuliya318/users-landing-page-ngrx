import { createSelector } from '@ngrx/store';
import * as fromUsersList from '@users-page/store/reducers/load-users.reducers';
import { selectUsersListState } from '@users-page/store/reducers';

export const selectUsersList = createSelector(
  selectUsersListState,
  fromUsersList.selectUsersList
);

export const selectTotalPages = createSelector(
  selectUsersListState,
  fromUsersList.selectTotalPages
);

export const selectPageCounter = createSelector(
  selectUsersListState,
  fromUsersList.selectPageCounter
);

export const selectIsLoading = createSelector(
  selectUsersListState,
  fromUsersList.selectIsLoading
);
