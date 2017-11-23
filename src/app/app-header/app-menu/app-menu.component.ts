import { Component } from '@angular/core';

import Item from './Models/menuItem';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-menu',
    templateUrl: './app-menu.component.html',
    styleUrls: ['./app-menu.component.css']
})
export class MenuComponent implements OnInit {
    menuItems: Array<Item> = [
        {
            id: 1,
            title: 'Home',
            link: '/home'
        },
        {
            id: 2,
            title: 'Game',
            link: '/game',
        }, 
        {
            id: 3,
            title: 'About',
            link: '/about',
        },
        {
            id: 4,
            title: 'Map',
            link: '/map'
        },
    ]


    constructor() {
        //console.log("APP MENU CONSTRUCTOR", this.menuItems);
    }

    ngOnInit() {
        //console.log("APP MENU ONINIT", this.menuItems);
    }
}
