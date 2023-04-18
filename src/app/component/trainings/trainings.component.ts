import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/apiService/apiService';
import { Training } from 'src/app/models/training';
import { CartService } from 'src/app/services/cartService/cart.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css'],
})
export class TrainingsComponent implements OnInit {
  list_training: Training[] = [];
  error!: string;
  constructor(private apiService: ApiService, private cartService: CartService) {}

  ngOnInit(): void {
    this.getTraining();
  }

  getTraining() {
    this.apiService.getTrainings().subscribe({
      next: (data) => (this.list_training = data),
      error: (error) => (this.error = error.message),
      complete: () => (this.error = ''),
    });
  }

addToCart(training : Training) {
  this.cartService.addTrainingToCart(training)
}
}
