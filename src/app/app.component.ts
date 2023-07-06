import { Component } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { UserService } from './user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shop';
  constructor(private a:AuthServiceService,private d:UserService,private e:Router)
  {
    a.user$.subscribe(user=>{
      if(user)
      {
        let returnUrl=localStorage.getItem('returnUrl');
        if(returnUrl)
        {
        this.e.navigate([returnUrl]);
        localStorage.removeItem('returnUrl');
        }
        d.save(user);
      }
    })
  }
}
