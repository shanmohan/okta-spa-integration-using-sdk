import { Component, OnInit } from '@angular/core';
import { OktaAuthService, UserClaims } from '@okta/okta-angular';
import { isUndefined } from 'util';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'okta-integration-spa-using-okta-sdk-library';
  isAuthenticated: boolean;
  email: string;
  name: string;
  user: UserClaims;
  token: any;

  constructor(public oktaAuth: OktaAuthService) {
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();

    this.user = await this.oktaAuth.getUser();
    this.token = (await this.oktaAuth.getAccessToken());

    if (!isUndefined(this.token)) {
      var decoded = jwt_decode(this.token.toString());
      console.log(decoded);
    }

    if (!isUndefined(this.user)) {
      this.name = this.user.name;
    }

    
    this.oktaAuth.$authenticationState.subscribe(async (isAuthenticated: boolean) => {
      this.isAuthenticated = isAuthenticated;
      this.user = await this.oktaAuth.getUser();
      this.name = this.user.name;

      this.token = (await this.oktaAuth.getAccessToken());
      var decoded = jwt_decode(this.token.toString());
      console.log(decoded);
    });
  }
}
