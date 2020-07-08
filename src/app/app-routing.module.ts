import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { WidgetsComponentComponent } from './widgets-component/widgets-component.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard.service';
import { OktaInitiatedLoginComponent } from './okta-initiated-login/okta-initiated-login.component';


const routes: Routes = [{
  path: 'implicit/callback',
  component: OktaCallbackComponent
}, {
  path: 'dashboard',
  component: WidgetsComponentComponent,
  canActivate: [AuthGuard]
}, {
  path: 'login',
  component: OktaInitiatedLoginComponent
}, {
  path: '',
  component: HomeComponent
},
{
  path: 'home',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
