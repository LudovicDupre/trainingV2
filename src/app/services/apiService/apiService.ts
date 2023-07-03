import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Training } from 'src/app/models/training';
import { User } from 'src/app/models/user';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {}

  public getTrainings() {
    return this.http.get<Training[]>(environment.host+'/trainings');
  }

  public postTraining(training: any){
    return this.http.post<Training>(environment.host+'/trainings', training);
  }

  public delTraining(training: Training) {
    return this.http.delete(environment.host+'/trainings/'+training.id);
  }

  public getTraining(id : number) {
    return this.http.get<Training>(environment.host+"/trainings/"+id);
  }

  getUserByEmailAndPassword(email: string, password: string) {
  return  this.http.get<User[]>(`http://localhost:3000/users?email=${email}&password=${password}`);
  }

}


