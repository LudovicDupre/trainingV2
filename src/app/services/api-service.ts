import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Training } from '../models/training';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getTrainings() {
    return this.http.get<Training[]>('http://localhost:3000/trainings');
  }
  getTrainingById(id:number){
    return this.http.get<Training>('http://localhost:3000/trainings/' + id)
  }
}
