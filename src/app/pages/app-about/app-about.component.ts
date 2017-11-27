import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Post } from '../../Models/app/Post';
import { IPost } from '../../Models/app/IPost';
import { IAboutPost } from '../../Models/about/IAboutPost';
import * as Actions from './reducer/about.action';

interface AppState {
    aboutPost: any,
};

@Component({
    selector: 'app-about',
    templateUrl: './app-about.component.html',
    styleUrls: ['./app-about.component.css']
})
export class AboutComponent implements IAboutPost { 
    posts: Observable<Array<IPost>>;

    title: string;
    text: string;

    constructor(private store: Store<AppState>) {
        store.select('aboutPost').subscribe(store => {
            this.posts = store.posts;   
        });
    }

    addPost(post: Post) {
        this.store.dispatch(new Actions.AddPost(post));
        // Clear after dispatching
        this._clearPost();
    }

    delPost() {
        this.store.dispatch(new Actions.DelPost(-1));
    }

    loadPost() {
        this.store.dispatch(new Actions.LoadPost(-1));
    }

    loadPosts() {
        this.store.dispatch(new Actions.LoadPosts());
    }

    // UI 
    public _clearPost() {
        this.title = '';
        this.text = '';
    }

    public _addPost() {
        this.addPost(new Post(this.title, this.text));
    }
}
