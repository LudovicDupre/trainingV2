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

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems()
  }

  ngOnInit(): void {

  }

  removeItem(training: Training) {
    this.cartService.removeItem(training);
  }

  removeAndReload(training: Training) {
    this.removeItem(training);
    this.items = this.cartService.getItems();
  }

}