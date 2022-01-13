import { Action, createReducer, on } from '@ngrx/store';
import { initsession,
         initsessionSuccess,
         initsessionError,
         viewLogin,
         viewSignup
} from '../actions';

export interface SessionState {
    isLogin: boolean,
    isViewLogin: boolean,
    isViewSignup: boolean,
    loading: boolean,
    error: any,
    token: object
}

export const SessioninitialState: SessionState = {
    isLogin: false,
    isViewLogin: true,
    isViewSignup: false,
    loading: false,
    error: null,
    token: {}
}

const _sessionReducer = createReducer(SessioninitialState,

    on(initsession, state => ({ ...state, loading: true})),

    on(viewLogin, state => ({ 
        ...state,
        isViewSignup: false,
        isViewLogin: true
    })),

    on(viewSignup, state => ({ 
        ...state,
        isViewSignup: true,
        isViewLogin: false
    })),

    on(initsessionSuccess, (state, {token}) => ({
        ...state,
        loading: false,
        isLogin: true,
        token: {
            ...token
        }
    })),

    on(initsessionError, (state, {payload}) => ({
        ...state,
        loading: false,
        isLogin: false,
        error: payload
    })),

);

export function sessionReducer(state: SessionState | undefined, action: Action) {
    return _sessionReducer(state, action);
}