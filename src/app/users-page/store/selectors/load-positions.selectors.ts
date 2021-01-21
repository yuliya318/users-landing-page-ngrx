import { createSelector } from '@ngrx/store';
// import * as fromPositionsList from '@users-page/store/reducers/load-positions.reducers';
// import * as fromUsers from '@users-page/store';
import * as fromPositionsList from '@users-page/store/reducers/load-positions.reducers';
import { selectPositionsListState } from '@users-page/store/reducers';


// export const selectUsersState = createFeatureSelector<fromUsers.UsersState>(
//   fromUsers.usersFeatureKey
// );

// export const selectPositionsListState = createSelector(
//   selectUsersState,
//   (state) => state['positions-list']
// );


export const selectPositionsList = createSelector(
  selectPositionsListState,
  fromPositionsList.selectPositionsList
);
