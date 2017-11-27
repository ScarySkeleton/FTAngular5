import * as Actions from './about.action';
import { forEach } from '@angular/router/src/utils/collection';

export type Action = Actions.All;
const defState = {
    posts: [
        {
            title: 'some',
            text: 'text'
        }
    ]
};

export function aboutReducer(state = defState, action: Action) {
    switch(action.type) {
        case Actions.ADD_POST: {
            let posts = [];
            posts = state.posts;
            posts.push({
                title: action.payload.title,
                text: action.payload.text
            });
            return {
                ...state,
                posts
             }
        }
        case Actions.DEL_POST: {
            // const id = action.payload;
            // let post = state.post.map((post, index) => {
            //     if(post.id === id) {
            //         state.post.slice(index, 1);
            //     }
            // });
            
            return {
                ...state,
                //post
            }
        }
        case Actions.LOAD_POST: {
            return {
                ...state,
            }
        }
        case Actions.LOAD_POSTS: {
            return {
                ...state,
            }
        }
        default: {
            return state;
        }
    }
}
