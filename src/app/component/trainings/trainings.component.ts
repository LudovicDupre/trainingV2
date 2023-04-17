import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';
import { Training } from 'src/app/models/training';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css'],
})
export class TrainingsComponent implements OnInit {
  list_training: Training[] = [];
  training! : Training;
  error!: string;
  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.getTraining();

  }

  getTraining() {
    this.apiService.getTrainings().subscribe({
      next: (data) => (this.list_training = data),
      error: (error) => (this.error = error.message),
      complete: () => (this.error = 'complete'),
    });
  }
  getTrainingById(id :number){

    this.apiService.getTrainingById(id).subscribe({
      next:(data) => this.training = data,
      error:(err)=> this.error = err.message,
      complete:()=> this.error = 'complete'
    })
  }
}
