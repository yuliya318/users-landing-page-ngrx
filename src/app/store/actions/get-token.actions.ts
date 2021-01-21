import { createAction, props } from '@ngrx/store';
import { Token } from '@shared/interfaces/token.interface';

export const getToken = createAction(
  '[Users/API] Get Token'
);
export const getTokenSuccess = createAction(
  '[Users/API] Get Token Success',
  props<{ token: string }>()
);
export const getTokenFailure = createAction(
  '[Users/API] Get Token Failure',
  props<{ error: any }>()
);
