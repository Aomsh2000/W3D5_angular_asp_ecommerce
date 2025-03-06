import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
export const routes: Routes = [
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
  { path: 'product-list', component: ProductListComponent },
   { path: 'product-detail/:id', component: ProductDetailComponent }, 
   { path: 'cart', component: CartComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
