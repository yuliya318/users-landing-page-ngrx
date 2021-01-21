import { createAction, props } from '@ngrx/store';
import { RegisterRequest } from '@users-page/interfaces/register-request.interface';
import { RegisterSuccess } from '@users-page/interfaces/register-success.interface';

export const registerUser = createAction(
  '[Users/API] Register User',
  props<{ registerRequest: RegisterRequest }>()
);
export const registerUserSuccess = createAction(
  '[Users/API] Register User Success',
  props<{ registerSuccess: RegisterSuccess }>()
);
export const registerUserFailure = createAction(
  '[Users/API] Register User Failure',
  props<{ error: any }>()
);
export const registerUserTokenFailure = createAction(
  '[Users/API] Register User Failure With Invalid Token',
  props<{ error: any }>()
);
