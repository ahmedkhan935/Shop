import { Component, NgModule } from '@angular/core';
import { provideFirebaseApp } from '@angular/fire/app';
import { User,Auth, getAuth, provideAuth, user } from '@angular/fire/auth';
import { firebaseauth } from '../app.module';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user$:Observable<User | null>;

  constructor(private a:AuthServiceService)
  {


    this.user$=a.getuser();



  }
  logout()
  {
    this.a.logout();


  }


}
