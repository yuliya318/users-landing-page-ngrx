import { createAction, props } from '@ngrx/store';
import { UsersResponse } from '@users-page/interfaces/users-response.interface';

export const loadUsers = createAction(
  '[Users/API] Load Users',
  props<{ page: number, count: number }>()
);
export const loadUsersSuccess = createAction(
  '[Users/API] Load Users Success',
  props<{ usersResponse: UsersResponse }>()
);
export const loadUsersFailure = createAction(
  '[Users/API] Load Users Failure',
  props<{ error: any }>()
);
export const resetUsers = createAction(
  '[Users/API] Reset Users'
);