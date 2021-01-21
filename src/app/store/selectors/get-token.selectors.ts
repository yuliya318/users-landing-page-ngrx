import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromToken from '../reducers/get-token.reducers';

export const selectTokenState = createFeatureSelector<fromToken.TokenState>(
  fromToken.tokenFeatureKey
);

export const selectToken = createSelector(
  selectTokenState,
  fromToken.selectToken
);
