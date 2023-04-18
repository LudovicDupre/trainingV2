import { Injectable } from '@angular/core';
import { Training } from 'src/app/models/training';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartTraining : { [id: string]: Training } = {};

  constructor() {
    // On verifie si il existe un panier dans le local storage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      // Si il existe un cart dans le local storage, on récuperer les données et on l'envoi dans notre Map cartTraining
      const parsedCart = JSON.parse(storedCart);
      const cartTraining = ({...parsedCart}); //
      this.cartTraining = cartTraining;
    } else{
      // Si il n'existe pas dans le local storage, on créer un map vide.
      this.cartTraining = {};
    }
  }
// On ajoute au panier en vérifiant si l'article existe dans le panier
  addTrainingToCart(training: Training) {
    const id = training.id;
    const existingItem = this.cartTraining[id];

    if (existingItem) {
      // L'article existe déjà dans le panier on ajoute alors la quantité et nom l'article
      existingItem.quantity += training.quantity;
    } else {
      // Ajouter l'article au panier si il n'existait pas
      this.cartTraining[id] = training;
    }
    // a chaque changement dans le panier, on envoi le tableau dans le local Storage
    localStorage.setItem('cart', JSON.stringify(this.cartTraining));
  }


  /* Best Fonction du Programme
  getRetraiteà64ans(id:number) {
    if(T PAS MORT){
      tu bosse gros con
    } else {
      Bah T DCD
    }

    retraite += 2 ans

  */
}




