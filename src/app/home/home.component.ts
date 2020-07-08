import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { isUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  name: string;
  isAuthenticated: boolean;

  constructor(public oktaAuth: OktaAuthService, private route: Router) { }

  async ngOnInit() {
    this.user = await this.oktaAuth.getUser();
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();

    if (!isUndefined(this.user)) {
      this.name = this.user.name;
    }

  }

}
