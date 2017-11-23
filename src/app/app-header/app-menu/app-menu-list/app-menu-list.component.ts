import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

import Item from '../Models/menuItem';

@Component({
    selector: 'app-menu-list',
    templateUrl: './app-menu-list.component.html',
    styleUrls: ['./app-menu-list.component.css']
})
export class MenuListComponent implements OnInit {

    @Input() items: Array<Item>;

    constructor() {
        console.log("menu items constructor:", this.items);
    }
    
    ngOnInit() {
        // do smth on menu init
        console.log("menu items oninit:", this.items);
    }
}