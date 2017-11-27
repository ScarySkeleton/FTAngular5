import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { EffectsModule } from '@ngrx/effects';

// import { aboutEffects } from './pages/app-about/reducer/about.effects';
// import { aboutReducer } from './pages/app-about/reducer/about.reducer';

// Components
import { AppComponent } from './app.component';
import { FooterComponent } from './app-footer/app-footer.component';

// Modules
import { HeaderModule } from './app-header/app-header.module';
import { ContentModule } from './app-content/app-content.module';

// Directives

// Services
import { TaskService } from './services/task/task.service';
import { HomeComponent } from './pages/app-home/app-home.component';
import { AboutComponent } from './pages/app-about/app-about.component';



@NgModule({
  declarations: [
    // Components
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    ContentModule,
    //StoreModule.forRoot({ aboutPost: aboutReducer })
  ],
  providers: [
    TaskService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
