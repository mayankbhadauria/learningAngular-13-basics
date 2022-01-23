import { products, Product } from './../product'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.sass']
})
export class ProductListComponentComponent implements OnInit {

  products = products

  constructor() {}

  ngOnInit(): void {
    
  }

  share() {
    alert("Product got shared")
  }

  onNotify() {
    alert("Product got notified")
  }

}
