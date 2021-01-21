import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as getTokenActions from '../actions/get-token.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { AuthService } from '@shared/services/auth.service';
import { PersistanceService } from '@shared/services/persistence.service';

@Injectable()
export class GetTokenEffect {
  getToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTokenActions.getToken),
      switchMap(() => {
        return this.authService.getToken().pipe(
          map((token: string) => {
            this.persistenceService.set('accessToken', token);
            return getTokenActions.getTokenSuccess({
              token,
            });
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getTokenActions.getTokenFailure({
                error: errorResponse,
              })
            );
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistanceService
  ) {}
}
