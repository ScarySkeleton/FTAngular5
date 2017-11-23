import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ContentModule } from './app-content/app-content.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './app-header/app-header.module';
import { ContentComponent } from './app-content/app-content.component';
import { FooterComponent } from './app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    // Components
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    ContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
