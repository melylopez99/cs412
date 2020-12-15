import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ParentAComponent } from './parents/parent-a/parent-a.component';
import { CallingHTTPComponent } from './calling-http/calling-http.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentAComponent,
    CallingHTTPComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
