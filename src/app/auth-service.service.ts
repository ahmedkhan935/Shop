import { Injectable } from '@angular/core';
import { Auth, User, user } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from "@angular/fire/auth";
import { signInWithRedirect } from 'firebase/auth';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user$:Observable<User | null>;
  constructor(private af:Auth ,private route:ActivatedRoute) {
    this.user$=user(af);
   }
   login()
   {

    const google=new firebase.GoogleAuthProvider();
    return signInWithRedirect(this.af,google);



   }
   logout()
   {
    this.af.signOut();
   }
   getuser():Observable<User | null>{
    return this.user$;

   }
}
