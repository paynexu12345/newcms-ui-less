import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from 'project-shared/components/login/login.component';
// import { EnterCheckComponent } from 'project-shared/components/enter-check/enter-check.component';
// import { LoginCheck } from 'project-shared/services/security/login-check';
// import { PartnerCheck } from 'project-shared/services/security/partner-check.service';
// import { SettingsAcquire } from 'project-shared/services/security/settings-acquire';
// import { HomeComponent } from 'project-shared/components/home/home.component';
import { ContentHomeComponent } from './content-home/content-home.component';
const routes: Routes = [
  // {
  //   path: "login",
  //   component: LoginComponent
  // },
  {
    path:"",
    // canActivate:[LoginCheck,PartnerCheck,SettingsAcquire],
    children:[
      {
        path: "home",
        component: ContentHomeComponent
      },
      {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
