import { Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AddflightComponent } from './admin/addflight/addflight.component';
import { ViewflightComponent } from './admin/viewflight/viewflight.component';
import { LandingpageComponent } from './common/landingpage/landingpage.component';
import { SearchflightComponent } from './user/searchflight/searchflight.component';


export const ROUTES: Routes = [
    // Main redirect
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'user',
        component: UserComponent,
        children: [
            {
                path: 'home',
                component: LandingpageComponent
            },
            {
                path: 'searchflight',
                component: SearchflightComponent
            }
        ]
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: 'home',
                component: LandingpageComponent
            },
            {
                path: 'addflight',
                component: AddflightComponent
            },
            {
                path: 'viewflight',
                component: ViewflightComponent
            }
        ]
    }

]