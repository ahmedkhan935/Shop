import { Injectable } from '@angular/core';
import { Database, get, ref } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private d:Database) { }
  async getcategories():Promise<any[]>
  {
    let categories: any[]=[];
    await get(ref(this.d,"/categories")).then((result)=>
    {
      if(result)
      {
       
        const snapshot=result.val();
        result.forEach((key)=>
        {
          categories.push(key.child("name").val());
        });


      }

    });
    return categories;
  }
}
