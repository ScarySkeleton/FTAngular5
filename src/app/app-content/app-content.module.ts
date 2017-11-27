import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { aboutEffects } from '../pages/app-about/reducer/about.effects';
import { aboutReducer } from '../pages/app-about/reducer/about.reducer';

// Directive 
import { HighlightDirective } from '../directives/highlight'; 
// Component
import { ContentComponent } from './app-content.component';
import { HomeComponent } from '../pages/app-home/app-home.component';
import { AboutComponent } from '../pages/app-about/app-about.component';
import { PageNotFoundComponent } from '../pages/pageNotFound/pageNotFound.component';

// Pipes
import { AgePipe } from '../pipes/age.pipe';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
      path: 'home', 
      component: HomeComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
  ]

@NgModule({
    declarations: [
        ContentComponent,
        HomeComponent,
        AboutComponent,
        PageNotFoundComponent,
        HighlightDirective,
        AgePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(appRoutes, {
            //enableTracing: true // for debug only
          }),
        StoreModule.forRoot({ aboutPost: aboutReducer })
    ],
    exports: [
        ContentComponent,
        AgePipe 
    ]
})
export class ContentModule { }
