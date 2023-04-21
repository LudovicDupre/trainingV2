import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiService } from '../apiService/apiService';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  userList : User[] = [];
  error = "";
  errorMessage = false;
  isConnected = false;
  constructor(private authService : ApiService) { }

  isAdmin() :any {
    for(let user of this.userList){
      if(user.role === 'admin') {
        return true;
      } else {
        return false;
      }
    }

  }

  getUser(email: string, password: string) { {
    this.authService.getUserByEmailAndPassword(email, password)
    .subscribe({
      next: (data) =>{
        this.userList = data
        if (this.userList.length > 0)
        this.isConnected = true;
        localStorage.setItem('User', JSON.stringify(this.userList))
      },
      error: (error) => (this.error = error.message),
      complete: () => (this.error = ''),}
    )
  }
  }

  disconnectUser() {
  this.isConnected=false
  localStorage.removeItem('User');
  this.userList = []
  this.errorMessage = true
  }

}
