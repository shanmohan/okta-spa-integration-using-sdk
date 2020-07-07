import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OktaAuthModule, OktaAuthService } from '@okta/okta-angular';
import { WidgetsComponentComponent } from './widgets-component/widgets-component.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component'
import { globalConfig } from './config';

const config = {
  issuer: globalConfig.issuer,
  redirectUri: globalConfig.redirectUri,
  clientId: globalConfig.clientId,
  scopes: globalConfig.scopes
};


@NgModule({
  declarations: [
    AppComponent,
    WidgetsComponentComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule.initAuth(config)
  ],
  providers: [OktaAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
