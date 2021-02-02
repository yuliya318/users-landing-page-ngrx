import { createSelector } from '@ngrx/store';
import * as fromPositionsList from '@users-page/store/reducers/load-positions.reducers';
import { selectPositionsListState } from '@users-page/store/reducers';

export const selectPositionsList = createSelector(
  selectPositionsListState,
  fromPositionsList.selectPositionsList
);
