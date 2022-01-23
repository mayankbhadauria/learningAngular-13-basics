import { Product } from './../product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.sass']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product!: Product
  @Output() notify = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

}
