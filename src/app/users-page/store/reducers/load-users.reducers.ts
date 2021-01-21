import { createReducer, on } from '@ngrx/store';
import { User } from '@shared/interfaces/user.interface';
import * as loadUsersActions from '@users-page/store/actions/load-users.actions';

export const usersListFeatureKey = 'users-list';

export interface UsersListState {
  usersList: User[];
  totalPages: number;
  isLoading: boolean;
}

const initialState: UsersListState = {
  usersList: [],
  totalPages: null,
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  on(loadUsersActions.loadUsers, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(loadUsersActions.loadUsersSuccess, (state, { usersResponse }) => ({
    ...state,
    isLoading: false,
    usersList: [...state.usersList, ...usersResponse.users],
    totalPages: usersResponse.total_pages
  })),
  on(loadUsersActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(loadUsersActions.resetUsers, (state) => ({
    // ...state,
    ...initialState,
  })),
);

export const selectUsersList = (state: UsersListState) => state.usersList;
export const selectIsLoading = (state: UsersListState) => state.isLoading;
export const selectTotalPages = (state: UsersListState) => state.totalPages;
