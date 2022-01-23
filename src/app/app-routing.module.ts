import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component'
import { ProductListComponentComponent } from './product-list-component/product-list-component.component'
import { CartComponent } from './cart/cart.component'
import { ShippingComponent } from './shipping/shipping.component'

const routes: Routes = [
  { path: '', component: ProductListComponentComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
