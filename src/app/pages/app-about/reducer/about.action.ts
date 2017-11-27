import { Action } from '@ngrx/store';

import { IPost } from '../../../Models/app/IPost'; 

export const ADD_POST = 'ADD_POST';
export const DEL_POST = 'DEL_POST';
export const LOAD_POST = 'LOAD_POST';
export const LOAD_POSTS = 'LOAD_POSTS';

export class AddPost implements Action {
    readonly type = ADD_POST;
    constructor(public payload: IPost) {}
}

export class DelPost implements Action {
    readonly type = DEL_POST;
    constructor(public payload: number) {}
}

export class LoadPost implements Action {
    readonly type = LOAD_POST;
    constructor(public payload: number) {}
}

export class LoadPosts implements Action {
    readonly type = LOAD_POSTS;
}

export type All = AddPost | DelPost | LoadPost | LoadPosts;
