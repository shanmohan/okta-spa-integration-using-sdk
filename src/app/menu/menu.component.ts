import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { globalConfig } from '../config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isAuthenticated: boolean;

  constructor(public oktaAuth: OktaAuthService) {
  }

  async logout() {
    // Read idToken before local session is cleared
    const idToken = await this.oktaAuth.getIdToken();

    // Clear local session
    await this.oktaAuth.logout('/');

    // Clear remote session
    window.location.href = `${globalConfig.issuer}/v1/logout?id_token_hint=${idToken}&post_logout_redirect_uri=${globalConfig.logOutRedirectionUrl}`;
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();

    this.oktaAuth.$authenticationState.subscribe(async (isAuthenticated: boolean) => {
      this.isAuthenticated = isAuthenticated;
    });

  }

}
