import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/models/training';
import { ApiService } from 'src/app/services/apiService/apiService';
import { CartService } from 'src/app/services/cartService/cart.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  list_training: Training[] = [];
  error!: string;

  constructor(private apiService: ApiService, private cartService: CartService) { }


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

  delTraining(training: Training) {
  this.apiService.delTraining(training).subscribe({
    next: ()=> (this.list_training= this.list_training?.filter(Training => Training.id !== training.id)),
    error: (err) => (console.error('Erreur lors de la suppression : ', err)),
    complete: ()=> (this.error = 'null')
  })
  
  }
}
