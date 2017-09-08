import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RegisterComponent} from "./register.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [RegisterComponent],
  imports: [BrowserModule, RouterModule, FormsModule, HttpModule]
})

export class RegisterModule {}
