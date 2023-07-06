import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import{AngularFireModule} from '@angular/fire/compat';
import { NavbarComponent } from './navbar/navbar.component';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import {provideDatabase} from '@angular/fire/database'
import { Auth,provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { ProductformComponent } from './admin/productform/productform.component';
import { FormsModule } from '@angular/forms';
import { CustomValidators,CustomFormsModule } from 'ng2-validation';
import { MatTableModule } from '@angular/material/table';
import { ViewProductsComponent } from './view-products/view-products.component';
const firebaseConfig = {
  apiKey: "AIzaSyARaWsJYm23SVUe7a1JGb_hpgAbdxBIAgo",
  authDomain: "oshop-dce9f.firebaseapp.com",
  projectId: "oshop-dce9f",
  storageBucket: "oshop-dce9f.appspot.com",
  messagingSenderId: "988007829673",
  appId: "1:988007829673:web:c916d6d57e228890d859b8",
  measurementId: "G-TD7J3X4B9B",
  databaseURL:"https://oshop-dce9f-default-rtdb.asia-southeast1.firebasedatabase.app"
};
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ManageProductsComponent,
    ManageOrdersComponent,
    LogoutComponent,
    LoginComponent,
    NavbarComponent,
    ProductformComponent,
    ViewProductsComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatTableModule,
    provideFirebaseApp(()=>initializeApp(firebaseConfig)),
    provideAuth(()=>{return getAuth(initializeApp(firebaseConfig))}),
    provideDatabase(()=> getDatabase())




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function firebaseauth()
{
  provideFirebaseApp(()=> initializeApp(firebaseConfig));
  return getAuth();
}
