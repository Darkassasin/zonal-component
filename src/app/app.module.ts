import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ZoneComponent } from './zone/zone.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ZoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
