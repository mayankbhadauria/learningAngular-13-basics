import { CartService } from './../cart.service';
import { CartComponent } from './../cart/cart.component';
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.sass']
})
export class ShippingComponent implements OnInit {

  shippingCost = this.cartService.getShippingPrices()

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
