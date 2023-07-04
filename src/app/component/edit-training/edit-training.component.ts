import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/models/training';
import { ApiService } from 'src/app/services/apiService/apiService';

@Component({
  selector: 'app-edit-training',
  templateUrl: './edit-training.component.html',
  styleUrls: ['./edit-training.component.css']
})
export class EditTrainingComponent implements OnInit{

  training!: Training;
  error: null | undefined;
  constructor(private apiService: ApiService, private route : Router) {}
 
 
  ngOnInit(): void {
    this.training = history.state.training;
  }

  onEditTraining() {
    this.apiService.postTraining(this.training).subscribe({
      next: () => (this.route.navigate(['/admin'])),
      error: (err) => (console.error("Erreur pendant la modification : ",err)),
      complete: () => (this.error = null)
    });
  }

}
