import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsersList from './load-users.reducers';
import * as fromPositionsList from './load-positions.reducers';
import * as fromRegisterUser from './register-user.reducers';

export const usersFeatureKey = 'users';

export interface UsersState {
  [fromUsersList.usersListFeatureKey]: fromUsersList.UsersListState;
  [fromPositionsList.positionsListFeatureKey]: fromPositionsList.PositionsListState;
  [fromRegisterUser.registerUserFeatureKey]: fromRegisterUser.RegisterUserState;
}

export function reducers(state: UsersState | null, action: Action) {
  return combineReducers({
    [fromUsersList.usersListFeatureKey]: fromUsersList.reducer,
    [fromPositionsList.positionsListFeatureKey]: fromPositionsList.reducer,
    [fromRegisterUser.registerUserFeatureKey]: fromRegisterUser.reducer,
  })(state, action);
}

export const getUsersState = createFeatureSelector<UsersState>(
  usersFeatureKey,
);

export const selectPositionsListState = createSelector(
  getUsersState,
  (state: UsersState) => state[fromPositionsList.positionsListFeatureKey],
);

export const selectUsersListState = createSelector(
  getUsersState,
  (state: UsersState) => state[fromUsersList.usersListFeatureKey],
);

export const selectRegisterUserState = createSelector(
  getUsersState,
  (state: UsersState) => state[fromRegisterUser.registerUserFeatureKey],
);

