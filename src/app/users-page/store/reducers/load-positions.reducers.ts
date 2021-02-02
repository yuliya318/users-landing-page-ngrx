import { createReducer, on } from '@ngrx/store';
import { Position } from '@users-page/interfaces/position.interface';
import * as loadPositionsActions from '@users-page/store/actions/load-positions.actions';

export const positionsListFeatureKey = 'positions-list';

export interface PositionsListState {
  positionsList: Position[];
}

const initialState: PositionsListState = {
  positionsList: [],
};

export const reducer = createReducer(
  initialState,
  on(loadPositionsActions.loadPositionsSuccess, (state, { positionsList }) => ({
    ...state,
    positionsList,
  })),
  on(loadPositionsActions.loadPositionsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export const selectPositionsList = (state: PositionsListState) => state.positionsList;
