import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { isUndefined } from 'util';

@Component({
  selector: 'app-widgets-component',
  templateUrl: './widgets-component.component.html',
  styleUrls: ['./widgets-component.component.css']
})
export class WidgetsComponentComponent implements OnInit {
  user: any;
  name: string;
  
  constructor(private oktaAuth: OktaAuthService) { }

  async ngOnInit() {
    this.user = await this.oktaAuth.getUser();

    if (!isUndefined(this.user)) {
      this.name = this.user.name;
    }
    
  }

}
