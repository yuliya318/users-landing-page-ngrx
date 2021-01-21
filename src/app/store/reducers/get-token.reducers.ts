import { createReducer, on } from '@ngrx/store';
import * as getTokenActions from '../actions/get-token.actions';

export const tokenFeatureKey = 'token';

export interface TokenState {
  token: string;
}

const initialState: TokenState = {
  token: null,
};

export const reducer = createReducer(
  initialState,
  on(getTokenActions.getTokenSuccess, (state, { token }) => ({
    ...state,
    token,
  })),
  on(getTokenActions.getTokenFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export const selectToken = (state: TokenState) => state.token;
