import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/models/training';
import { ApiService } from 'src/app/services/apiService/apiService';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent {
  error: null | undefined;

  constructor(private apiService: ApiService, private route : Router) {}

  training : Training = new Training(0,"","",0,1,"")

  onAddTraining() {
    this.apiService.postTraining(this.training).subscribe({
      next: () => (this.route.navigate(['/trainings'])),
      error:(err) => (console.error("Erreur à l'ajout : ", err)),
      complete: () => (this.error = null)
    });
  }
}
