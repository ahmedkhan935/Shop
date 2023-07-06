import { Injectable } from '@angular/core';
import { Database ,ref,set} from '@angular/fire/database';
import * as firebase from '@angular/fire/auth';
import { DataSnapshot, child, get } from 'firebase/database';
import { User } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private d:Database) {

   }
   save(user:firebase.User)
   {
    set(ref(this.d,'/users/'+ user.uid),{
      name:user.displayName,
      email:user.email,
      isAdmin:true

    })


   }
   async get(uid:String):Promise<any>
   {

    return await get(child(ref(this.d),'/users/'+uid)).then((result)=>
    {
      if(result)
      {
       
        return result.val();
      }

    })





   }
}
