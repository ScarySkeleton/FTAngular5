import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

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
        RouterModule.forRoot(appRoutes, {
            enableTracing: true // for debug only
          })
    ],
    exports: [
        ContentComponent,
        AgePipe 
    ]
})
export class ContentModule { }
