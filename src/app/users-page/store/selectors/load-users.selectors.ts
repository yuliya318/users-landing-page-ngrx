import { createSelector } from '@ngrx/store';
// import * as fromUsersList from '@users-page/store/reducers/load-users.reducers';
// import * as fromUsers from '@users-page/store';
import * as fromUsersList from '@users-page/store/reducers/load-users.reducers';
import { selectUsersListState } from '@users-page/store/reducers';

// export const selectOneMoreUsersState = createFeatureSelector<fromUsers.UsersState>(
//   fromUsers.usersFeatureKey
// );
// // selectOneMoreUsersState ?????
// export const selectUsersListState = createSelector(
//   selectOneMoreUsersState,
//   (state) => state['users-list']
// );

export const selectUsersList = createSelector(
  selectUsersListState,
  fromUsersList.selectUsersList
);

export const selectTotalPages = createSelector(
  selectUsersListState,
  fromUsersList.selectTotalPages
);

export const selectIsLoading = createSelector(
  selectUsersListState,
  fromUsersList.selectIsLoading
);
