import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as registerUserActions from '@users-page/store/actions/register-user.actions';
import * as getTokenActions from '@app/store/actions/get-token.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { UsersService } from '@users-page/services/users.service';
import { RegisterSuccess } from '@users-page/interfaces/register-success.interface';

@Injectable()
export class RegisterUserEffect {
  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUserActions.registerUser),
      switchMap(({ registerRequest }) => {
        return this.usersService.createUser(registerRequest).pipe(
          map((registerSuccess: RegisterSuccess) => {
            this.usersService.clearForm();
            return registerUserActions.registerUserSuccess({
                registerSuccess,
            });
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            const invalidToken = errorResponse.error.message.includes('Invalid token');
            if(invalidToken) {
              return of (
                registerUserActions.registerUserTokenFailure({
                  error: errorResponse,
                })
              );
            }
            return of(
              registerUserActions.registerUserFailure({
                error: errorResponse,
              })
            );
          })
          
        );
      })
    )
  );

  registerUserFailure$ = createEffect(() => 
    this.actions$.pipe(
      ofType(registerUserActions.registerUserTokenFailure),
      switchMap(({ error }) => {
        return of (
          getTokenActions.getToken()
        );
      }
      
    ))
  )

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
