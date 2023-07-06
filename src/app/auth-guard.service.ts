

import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import { firstValueFrom } from 'rxjs';
import { UserService } from './user.service';
import { User } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';


const helper=async ()=>
{
  const auth = inject(AuthServiceService);
    var flag:boolean=false;
    const user=auth.getuser();
    var flag=await firstValueFrom(user).then((result)=>
    {
      if(result)
      {

        return true;
      }
      else
      {
        return false;
      }

    });

    return flag;



}
export const NameGuard: CanActivateFn = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    const router=inject(Router);

    var result;
    await helper().then((res)=>
    {
      result=res;


    });


    if(result ==undefined)
      return false;
    else
      if(result==false)
      {
        router.navigate(["/login"],{queryParams:{returnUrl:state.url}});
        localStorage.setItem("returnUrl",state.url);


        return false;


      }
      else
      {
        return true;
      }


    // auth.getuser().subscribe((result)=>
    // {
    //   console.log(result);
    //   if(result?.displayName)
    //   {
    //     flag=true;
    //   }
    //   else
    //   {
    //     flag=false;
    //   }

    // })
    // console.log(flag);
    // return flag;




}

export const NameGuards: CanActivateFn = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    let flag=false;
    let auth=inject(AuthServiceService);
    let user=inject(UserService);
    let x= await firstValueFrom(auth.getuser()).then(async (result)=>
    {
      if(!result)
      {

        return false;
      }
      else
      {

        return await firstValueFrom(auth.getuser()).then((result)=>
        {
          if(result!=null)
          {
            return user.get(result.uid).then((user)=>
            {

              if(user && user.isAdmin)
              {

                return true;
              }
              else
              {
                return false;
              }
            });

          }
          else
            {return false;}

        })
      }



    })
    if(!x)
    {
      alert("You are not an admin");
    }
    return x;

}
