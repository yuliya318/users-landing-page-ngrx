import { createSelector } from '@ngrx/store';
import * as fromRegisterUser from '@users-page/store/reducers/register-user.reducers';
import { selectRegisterUserState } from '@users-page/store/reducers';

export const selectIsLoadingRegister = createSelector(
    selectRegisterUserState,
    fromRegisterUser.selectIsLoadingRegister
);

export const selectMessage = createSelector(
    selectRegisterUserState,
    fromRegisterUser.selectMessage
);

export const selectUserID = createSelector(
    selectRegisterUserState,
    fromRegisterUser.selectUserID
);

export const selectTokenError = createSelector(
    selectRegisterUserState,
    fromRegisterUser.selectTokenError
);
