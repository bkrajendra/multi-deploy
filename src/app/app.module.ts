import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PathOneComponent } from './path-one/path-one.component';
import { PathTwoComponent } from './path-two/path-two.component';

@NgModule({
  declarations: [
    AppComponent,
    PathOneComponent,
    PathTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
