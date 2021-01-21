import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as loadPositionsActions from '@users-page/store/actions/load-positions.actions';
// import * as fromUsers from '@users-page/store';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { UsersService } from '@users-page/services/users.service';
import { Position } from '@users-page/interfaces/position.interface';

@Injectable()
export class PositionsListEffect {
  loadPositions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPositionsActions.loadPositions),
      switchMap(() => {
        return this.usersService.getPositionsList().pipe(
          map((positionsList: Position[]) => {
            return loadPositionsActions.loadPositionsSuccess({
              positionsList,
            });
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loadPositionsActions.loadPositionsFailure({
                error: errorResponse,
              })
            );
          })
          
        );
      })
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
