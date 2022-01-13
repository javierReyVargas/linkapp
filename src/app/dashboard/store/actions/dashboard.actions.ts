import { createAction, props } from '@ngrx/store';

export const loadListUrls = createAction('[List url] Url list');
export const loadListUrlsSuccess = createAction('[List url] Url list Success',
                                   props<{arrUrls: []}>());
export const loadListUrlsError = createAction('[List url] Url list Error',
                                                props<any>());



export const createLink = createAction('[Create url] Create Url',
                          props<{name: string, url: string}>());
export const createLinkSuccess = createAction('[Create url] Create url Success',
                          props<{name: string, url: string, id: string}>());
export const createLinkError = createAction('[Create url] Create url error',
                          props<{payload: any}>());


                          
export const deleteLink = createAction('[Delete url] Delete Url',
                          props<{id: string}>());
export const deleteLinkSuccess = createAction('[Delete url] Delete Url Success',
                          props<{id: string}>());
export const deleteLinkError = createAction('[Delete url] Delete Url error',
                          props<{payload: any}>());