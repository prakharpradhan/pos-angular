import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'customer/store', component: StoreComponent },
  { path: 'cart', component: CartComponent },
  { path: '', component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
