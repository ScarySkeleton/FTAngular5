import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import Item from '../Models/menuItem';

@Component({
    selector: 'app-menu-item',
    templateUrl: './app-menu-item.component.html',
    styleUrls: ['./app-menu-item.component.css'],
})
export class MenuItemComponent implements OnInit {

    constructor() {
        console.log("MENU ITEM const", this.item);
     }

    @Input() item: Item;

    ngOnInit() {
        console.log("MENU ITEM init", this.item);
    }
}
