import { Component } from '@angular/core';
import { CategoryServiceService } from 'src/app/category-service.service';
import { ProductService } from 'src/app/product.service';
import {CustomValidators} from "ng2-validation"
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router } from '@angular/router';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent {
  categories:any[] | undefined;
  names:String="";
  prices:number=0;
  categorys:String="";
  imageUrl:String="";
  constructor(private c:CategoryServiceService,private p:ProductService,private r:Router,private rr:ActivatedRoute)
  {
    c.getcategories().then((result)=>
    {
      this.categories=result;
    });
    let name=rr.snapshot.paramMap.get('name');
    if(name)
    {
      p.getProduct(name).then((result)=>
      {
        console.log(result);
        this.names=result.title;
        this.prices=result.price;
        this.categorys=result.category;
        this.imageUrl=result.Url;
        console.log(this.names);
        console.log(this.prices);
        console.log(this.categorys);
        console.log(this.imageUrl);

      })
    }

  }
  submitForm(product:any)
  {
    for(const key in product)
    {
      if(product[key]==="")
      {
        alert("Please fill all the fields");
        return;
      }

    }
    console.log(product);
    this.p.saveProduct(product).then(()=>
      {
        alert("Product saved successfully");
      }
    );

  }
  deletep(product:any)
  {
    if(confirm('Are you sure?'))
    {
      this.p.deleteProduct(product.title).then(()=>
      {
        alert("Product deleted successfully");
        this.r.navigate(['/products']);
      })
    }

  }



}
