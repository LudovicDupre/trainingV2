import { Injectable } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Training } from 'src/app/models/training';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  tick() {
    throw new Error('Method not implemented.');
  }
  cartTraining: { [id: string]: Training } = {};

  constructor() {
    // On verifie si il existe un panier dans le local storage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      // Si il existe un cart dans le local storage, on récuperer les données et on l'envoi dans notre Map cartTraining
      const parsedCart = JSON.parse(storedCart);
      const cartTraining = ({ ...parsedCart }); //
      this.cartTraining = cartTraining;
    } else {
      // Si il n'existe pas dans le local storage, on créer un map vide.
      this.cartTraining = {};
    }
  }
  // On ajoute au panier en vérifiant si l'article existe dans le panier
  addTrainingToCart(training: Training, quantityToAdd:number) {
  const id = training.id;
  const existingItem = this.cartTraining[id];

  if (existingItem && existingItem.quantity !== undefined) {
    // L'article existe déjà dans le panier, on ajoute 1 à la quantité
    existingItem.quantity += quantityToAdd;
  } else {
    // Ajouter l'article au panier si il n'existait pas
    this.cartTraining[id] = { ...training, quantity: quantityToAdd };
  }

  // À chaque changement dans le panier, on envoie le tableau dans le localStorage
  localStorage.setItem('cart', JSON.stringify(this.cartTraining));
  }

  removeItem(training: Training) {
    delete this.cartTraining[training.id];
    localStorage.setItem('cart', JSON.stringify(this.cartTraining));

  }
  getItems() {
    return Object.values(this.cartTraining);
  }
  saveCustomer(customer : Customer) {
    console.log(customer);
  }
}




