import { createReducer, on } from '@ngrx/store';
import * as registerUserActions from '@users-page/store/actions/register-user.actions';

export const registerUserFeatureKey = 'user';

export interface RegisterUserState {
  userID: number | null;
  isLoading: boolean;
  message: string;
  tokenError: string;
}

const initialState: RegisterUserState = {
  userID: null,
  isLoading: false,
  message: null,
  tokenError: null,
};

export const reducer = createReducer(
  initialState,
  on(registerUserActions.registerUser, (state) => ({
    ...state,
    isLoading: true,
    error: null,
    tokenError: null,
  })),
  on(registerUserActions.registerUserSuccess, (state, { registerSuccess }) => ({
    ...state,
    isLoading: false,
    userID: registerSuccess.user_id,
    message: registerSuccess.message,
  })),
  on(registerUserActions.registerUserFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(registerUserActions.registerUserTokenFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
    tokenError: error.error.message,
  }))
);

export const selectIsLoadingRegister = (state: RegisterUserState) => state.isLoading;
export const selectMessage = (state: RegisterUserState) => state.message;
export const selectUserID = (state: RegisterUserState) => state.userID;
export const selectTokenError = (state: RegisterUserState) => state.tokenError;
