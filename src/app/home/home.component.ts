import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { isUndefined } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user : any;
  name : string;

  constructor(public oktaAuth : OktaAuthService) { }

  async ngOnInit() {
    this.user = await this.oktaAuth.getUser();

    if (!isUndefined(this.user)) {
      this.name = this.user.name;
    }

    
  }

}
