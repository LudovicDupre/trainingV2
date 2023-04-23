import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Training } from 'src/app/models/training';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getTrainings() {
    return this.http.get<Training[]>('http://localhost:3000/trainings');
  }
  getUserByEmailAndPassword(email: string, password: string) {
  return  this.http.get<User[]>(`http://localhost:3000/users?email=${email}&password=${password}`);
  }


}
