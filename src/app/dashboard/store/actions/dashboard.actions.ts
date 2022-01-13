import { createAction, props } from '@ngrx/store';

export const initsession = createAction('[Login] Init login');

export const initsessionSuccess = createAction('[Login] Init login success',
                                                props<{token: {token: string}}>());

export const initsessionError = createAction('[Login] Init login error',
                                                props<{payload: any}>());

export const viewLogin = createAction('[Login] Is view Login');

export const viewSignup = createAction('[Login] Is view Signup');