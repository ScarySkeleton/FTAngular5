import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './app-header.component';
import { MenuComponent } from './app-menu/app-menu.component';
import { MenuListComponent } from './app-menu/app-menu-list/app-menu-list.component';
import { MenuItemComponent } from './app-menu/app-menu-item/app-menu-item.component';

@NgModule({
    declarations: [
        HeaderComponent, 
        MenuComponent,
        MenuListComponent,
        MenuItemComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        HeaderComponent,
    ]
})
export class HeaderModule { }
