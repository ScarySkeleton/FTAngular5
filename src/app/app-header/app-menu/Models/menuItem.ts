export default class MenuItem {
    public id?: number;
    public title: string;
    public link: string;

    constructor(id: number = -1, title: string, link: string) {
        this.id = id;
        this.title = title;
        this.link = link;
    }
}