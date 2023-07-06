import { Injectable } from '@angular/core';
import { remove, Database, set, ref, get } from '@angular/fire/database';
import { push } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private d:Database) { }
  saveProduct(product:any)
  {
    return set(ref(this.d,"/products/"+product.title),product);


  }
  async getProducts():Promise<any[]>
  {
    let prods:any=[];
    await get(ref(this.d,"/products")).then((result)=>
    {
       const snap=result.val();
       for(const key in snap)
       {
          prods.push(snap[key]);
       }
    });
    return prods;
  }
  async getProduct(name:String):Promise<any>
  {
    let prod:any;
    await get(ref(this.d,"/products/"+name)).then((result)=>
    {
      prod=result.val();
    });
    return prod;

  }
  async deleteProduct(product:String):Promise<any>
  {
    return await remove(ref(this.d,"/products/"+product));

  }
}
