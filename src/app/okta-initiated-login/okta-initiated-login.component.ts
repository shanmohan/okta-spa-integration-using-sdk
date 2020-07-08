import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-okta-initiated-login',
  templateUrl: './okta-initiated-login.component.html',
  styleUrls: ['./okta-initiated-login.component.css']
})
export class OktaInitiatedLoginComponent implements OnInit {

  constructor(private oktaAuth: OktaAuthService) { }

  ngOnInit() {
    this.oktaAuth.loginRedirect('dashboard');
  }

}
