import { createAction, props } from '@ngrx/store';
import { Position } from '@users-page/interfaces/position.interface';

export const loadPositions = createAction(
  '[Users/API] Load Positions'
);
export const loadPositionsSuccess = createAction(
  '[Users/API] Load Positions Success',
  props<{ positionsList: Position[] }>()
);
export const loadPositionsFailure = createAction(
  '[Users/API] Load Positions Failure',
  props<{ error: any }>()
);
