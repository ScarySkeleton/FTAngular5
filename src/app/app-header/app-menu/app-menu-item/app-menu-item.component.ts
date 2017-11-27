import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';

import Item from '../Models/menuItem';


@Component({
    selector: 'app-menu-item',
    templateUrl: './app-menu-item.component.html',
    styleUrls: ['./app-menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {

    constructor(private router: Router) {
        //
        //console.log("MENU ITEM const", this.item);
     }

    @Input() item: Item;

    ngOnInit() {
        //console.log("MENU ITEM init", this.item);
    }

    goTo(item: Item): void {
        this.router.navigate([`/${item.link}`]);
    }
}
