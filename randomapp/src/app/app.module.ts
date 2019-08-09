import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//import { MylibComponent } from 'mylib';

import { MylibModule } from 'mylib';

@NgModule({
  declarations: [
    AppComponent,
//    MylibComponent
  ],
  imports: [
    BrowserModule,
    MylibModule.forRoot(
      {
        socket:  { 
          url: 'http://localhost:9999', 
          options: {} 
        }
      }
     )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
