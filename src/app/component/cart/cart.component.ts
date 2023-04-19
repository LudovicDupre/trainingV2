import { Component } from '@angular/core';
import { Training } from 'src/app/models/training';
import { CartService } from 'src/app/services/cartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: Training[] = [];
  total = 0;

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems()
  }

  ngOnInit(): void {
    this.totalPrice(this.items);
  }
  totalPrice(training :Training[]){
    for(let i of training)
    this.total += (i.price * i.quantity)
  }

  removeItem(training: Training) {
    this.cartService.removeItem(training);
  }

  removeAndReload(training: Training) {
    this.removeItem(training);
    this.items = this.cartService.getItems();
    this.total -= training.price;

  }

}
