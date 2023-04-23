import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/models/training';
import { AuthentificationService } from 'src/app/services/authentificationService/authentification.service';
import { CartService } from 'src/app/services/cartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: Training[] = [];
  total = 0;
  isClicked = false;
  isConnected! : boolean;


  constructor(private cartService: CartService, private authService : AuthentificationService, private route : Router) {
    this.items = this.cartService.getItems()

    this.authService.booleanUser.then(value => {this.isConnected = value})
    console.log(this.isConnected)

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
    this.total -= training.price*training.quantity;

  }

  validateCart(){
    if(this.isConnected === true){
      this.isClicked === true
    } else {
      this.route.navigate(['/connexion'])
    }
  }

}
