import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule} from "@angular/router";
import {ToasterModule} from 'angular2-toaster';

import {ROUTES} from "./app.routes";
import { AppComponent } from './app.component';
// import { Ng2SliderComponent } from 'ng2-slider-component/ng2-slider.component';
// import { SlideAbleDirective } from 'ng2-slideable-directive/slideable.directive';
// import { Ng2StyledDirective } from 'ng2-styled-directive/ng2-styled.directive';

//App Views
import {LoginModule} from './login/login.module'
import {RegisterModule} from './register/register.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module'; 

@NgModule({
  declarations: [
    AppComponent,
    // SlideAbleDirective,
    // Ng2SliderComponent
  ],
  imports: [
    //Angular Modules
    BrowserModule,
    FormsModule,
    HttpModule,
    ToasterModule,

    LoginModule,
    RegisterModule,
    UserModule,
    AdminModule,

    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    // Ng2SliderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
