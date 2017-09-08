import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { ViewflightComponent } from "./viewflight.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule, BrowserModule, RouterModule, FormsModule, HttpModule
  ],
  declarations: [ViewflightComponent]
})
export class ViewflightModule { }
