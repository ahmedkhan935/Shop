import { Component } from '@angular/core';

import { AuthServiceService } from '../auth-service.service';
import { UserService } from '../user.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  route:ActivatedRouteSnapshot;
  constructor(private pf:AuthServiceService,private u:UserService,private routes:ActivatedRoute,private routee:Router)
  {
    this.route=routes.snapshot;



  }
  async login()
  {

    await this.pf.login();
    



  }
}
