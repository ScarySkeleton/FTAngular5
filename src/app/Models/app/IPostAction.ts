import { Post } from './Post';
export interface IPostAction {
    addPost(post: Post): void;
    delPost(id: number): void;
    loadPost(id: number): void;
    loadPosts(): void;
}