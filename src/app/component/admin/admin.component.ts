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

}
