import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as loadUsersActions from '@users-page/store/actions/load-users.actions';
// import * as fromUsers from '@users-page/store';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { UsersService } from '@users-page/services/users.service';
import { UsersResponse } from '@users-page/interfaces/users-response.interface';

@Injectable()
export class UsersListEffect {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsersActions.loadUsers),
      switchMap(({ page, count }) => {
        return this.usersService.getUsersList(page, count).pipe(
          map((usersResponse: UsersResponse) => {
            return loadUsersActions.loadUsersSuccess({
              usersResponse,
            });
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loadUsersActions.loadUsersFailure({
                error: errorResponse,
              })
            );
          })
        );
      })
    )
  );

  resetUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsersActions.resetUsers),
      switchMap(() => {
        return of (
          loadUsersActions.loadUsers({ page: 1, count: 6})
        );
      })
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
