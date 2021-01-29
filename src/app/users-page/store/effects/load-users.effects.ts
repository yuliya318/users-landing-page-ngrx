import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import * as loadUsersActions from '@users-page/store/actions/load-users.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { UsersService } from '@users-page/services/users.service';
import { UsersResponse } from '@users-page/interfaces/users-response.interface';
import { select, Store } from '@ngrx/store';
import { selectPageCounter} from '@users-page/store/selectors/load-users.selectors';

@Injectable()
export class UsersListEffect {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsersActions.loadUsers),
      withLatestFrom(this.store$.pipe(select(selectPageCounter))),
      switchMap(([{count}, pageCounter]) => {
        return this.usersService.getUsersList(pageCounter, count).pipe(
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
          loadUsersActions.loadUsers({ count: 9})
        );
      })
    )
  );

  constructor(private actions$: Actions, 
              private store$: Store, 
              private usersService: UsersService) {}
}
