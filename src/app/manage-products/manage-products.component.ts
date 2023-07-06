import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ProductService } from '../product.service';
import {MatTableModule} from "@angular/material/table"

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent {
  products:any[]=[];
  filteredProducts:any[]=[];
  constructor(private a:Auth,private p:ProductService)
  {
    p.getProducts().then(
      (result)=>{
        this.products=result;
        this.filteredProducts=this.products;
      }
    );


  }
  Filter(query:any)
  {
    this.filteredProducts=[];

    this.products.forEach((result)=>
    {
      if(result.title.toLowerCase().includes(query.toLowerCase()))
      {
        this.filteredProducts.push(result);
      }
    })

  }
}
