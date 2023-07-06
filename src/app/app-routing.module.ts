import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { LogoutComponent } from './logout/logout.component';
import { NameGuard, NameGuards } from './auth-guard.service';
import { ProductformComponent } from './admin/productform/productform.component';
import { MatTableModule } from '@angular/material/table';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  {path:'products',component:ManageProductsComponent,canActivate:[NameGuards]},
  {path:'orders',component:ManageOrdersComponent,canActivate:[NameGuards]},
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartComponent,canActivate:[NameGuard]},
  {path:"Login",component:LoginComponent},
  {path:"newProd",component:ProductformComponent},
  {path:"products/:name",component:ProductformComponent},
  {path:'**',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
