import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./login.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [ LoginComponent ],
  imports: [BrowserModule, RouterModule, FormsModule, HttpModule]
})

export class LoginModule {}
