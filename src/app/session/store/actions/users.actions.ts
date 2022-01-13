import { createAction, props } from '@ngrx/store';



export const initsession = createAction('[Login] Init login',
                        props<{email: string, password: string}>());
export const initsessionSuccess = createAction('[Login] Init login success',
                                                props<any>());
export const initsessionError = createAction('[Login] Init login error',
                                                props<any>());


export const viewLogin = createAction('[Login] Is view Login');
export const viewSignup = createAction('[Login] Is view Signup');




export const initSignup = createAction('[Signup] Init Signup',
                        props<{fullName: string, email: string, password: string}>());
export const initSignupSuccess = createAction('[Signup] Init Signup success',
                        props<{fullName: string, email: string, id: string, password: string}>());
export const initSignupError = createAction('[Signup] Init Signup error',
                                                props<any>());