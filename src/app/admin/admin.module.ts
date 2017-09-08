import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {AdminComponent} from "./admin.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AddflightModule } from './addflight/addflight.module';
import { ViewflightModule } from './viewflight/viewflight.module';
import { FooterModule } from '../common/footer/footer.module';
import { TopnavbarModule } from '../common/topnavbar/topnavbar.module';
import { LandingpageModule } from '../common/landingpage/landingpage.module';

@NgModule({
  imports: [
    CommonModule, BrowserModule, RouterModule, FormsModule, HttpModule, FooterModule, TopnavbarModule, AddflightModule, ViewflightModule, LandingpageModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
