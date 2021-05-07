import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Menu1Component } from './component/menu1/menu1.component';
import { Menu2Component } from './component/menu2/menu2.component';
import { Menu3Component } from './component/menu3/menu3.component';
import { Menu4Component } from './component/menu4/menu4.component';

@NgModule({
  declarations: [
    AppComponent,
    Menu1Component,
    Menu2Component,
    Menu3Component,
    Menu4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
