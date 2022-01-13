import { Action, createReducer, on } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as AuthUser from '../actions';

export interface SessionState {
    isLogin: boolean,
    isViewLogin: boolean,
    isViewSignup: boolean,
    loading: boolean,
    error: any,
    token: string,
    name: string,
    email: string,
    fullName: string,
    id: string
}

export interface AppStateWithLogin extends AppState {
    auth: SessionState
}

export const SessioninitialState: SessionState = {
    isLogin: false,
    isViewLogin: true,
    isViewSignup: false,
    loading: false,
    error: null,
    token: '',
    email: '',
    name: '',
    fullName: '',
    id: ''
}

const _sessionReducer = createReducer(SessioninitialState,

    on(AuthUser.initsession, state => ({ ...state, loading: true})),

    on(AuthUser.viewLogin, state => ({ 
        ...state,
        isViewSignup: false,
        isViewLogin: true
    })),

    on(AuthUser.viewSignup, state => ({ 
        ...state,
        isViewSignup: true,
        isViewLogin: false
    })),

    on(AuthUser.initsessionSuccess, (state, {token}) => ({
        ...state,
        loading: false,
        isLogin: true,
        token: token
    })),

    on(AuthUser.initsessionError, (state, {payload}) => ({
        ...state,
        loading: false,
        isLogin: false,
        error: payload
    })),



    on(AuthUser.initSignup, (state) => (
        {
            ...state,
            loading: true
        }
    )),
    
    on(AuthUser.initSignupSuccess, (state, {fullName, email, id}) => ({
        ...state,
        loading: false,
        isLogin: true,
        fullName,
        email,
        id
    })),

    on(AuthUser.initSignupError, (state, {payload}) => ({
        ...state,
        loading: false,
        isLogin: false,
        error: payload
    })),

);

export function sessionReducer(state: SessionState | undefined, action: Action) {
    return _sessionReducer(state, action);
}