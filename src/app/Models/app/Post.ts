import { IPost } from './IPost';

export class Post implements IPost {
    title: string;
    text: string;

    constructor(title: string, text: string) {
        this.title = title;
        this.text = text;
    }
}
