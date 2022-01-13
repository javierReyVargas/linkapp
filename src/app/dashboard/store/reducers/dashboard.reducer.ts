import { Action, createReducer, on } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actionsDashboard from '../actions';

export interface DashboardState {
    listLinks: any[],
    loading: boolean,
    errorLinks: any
}


export interface AppStateWithDashboard extends AppState {
    dashboard: DashboardState
}



export const DashboardInitialState: DashboardState = {
    listLinks: [],
    loading: false,
    errorLinks: null
}

const _dashboardReducer = createReducer(DashboardInitialState,

    on(actionsDashboard.createLink, state => (
        {
            ...state,
            loading: true
        })),

    on(actionsDashboard.createLinkSuccess, (state, {name, url, id}) => ({ 
        ...state,
        loading: false,
        listLinks: [
            ...state.listLinks,
            {name, url, id}
        ]
    })),

    on(actionsDashboard.createLinkError, (state, {payload}) => ({ 
        ...state,
        loading: false,
        errorLinks: payload
    })),

    on(actionsDashboard.loadListUrls, (state) => ({
        ...state,
        loading: true,
    })),

    on(actionsDashboard.loadListUrlsSuccess, (state, arrUrls) => ({
        ...state,
        loading: false,
        listLinks: arrUrls.arrUrls
    })),


    on(actionsDashboard.deleteLink, (state, {id}) => ({ 
        ...state,
        loading: true
    })),

    on(actionsDashboard.deleteLinkSuccess, (state, {id}) => ({ 
        ...state,
        loading: false,
        listLinks: state.listLinks.filter( link => link.id !== id)
    })),

    on(actionsDashboard.deleteLinkError, (state, {payload}) => ({
        ...state,
        loading: false,
        errorLinks: payload        
    }))

);

export function dashboardReducer(state: DashboardState | undefined, action: Action) {
    return _dashboardReducer(state, action);
}