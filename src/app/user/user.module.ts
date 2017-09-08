import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { UserComponent } from "./user.component";
import { ToasterModule } from 'angular2-toaster';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FooterModule } from '../common/footer/footer.module';
import { TopnavbarModule } from '../common/topnavbar/topnavbar.module';
import { LandingpageModule } from '../common/landingpage/landingpage.module';
import { SearchflightModule } from './searchflight/searchflight.module';


@NgModule({
  imports: [
    CommonModule, BrowserModule, RouterModule, FormsModule, HttpModule, FooterModule, TopnavbarModule, LandingpageModule, ToasterModule, SearchflightModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }
