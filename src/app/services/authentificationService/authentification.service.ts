import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiService } from '../apiService/apiService';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  userConnected! : User;
  error = "";
  errorMessage = false;
  isConnected = false;
  constructor(private authService : ApiService, private route : Router) {
// On verifie si il existe un panier dans le local storage
const userInLS = localStorage.getItem('User');
if (userInLS) {
  // Si il existe un cart dans le local storage, on récuperer les données et on l'envoi dans notre Map cartTraining
  const parsedUser = JSON.parse(userInLS);
  this.userConnected = ({ ...parsedUser }); //

  this.verifyUser(this.userConnected.email, this.userConnected.password)

  } else {
    this.userConnected = new User(0,'','','','');
  }


  }

  isAdmin() :any {

      if(this.userConnected.role === 'admin') {
        return true;
      } else {
        return false;
      }
  }

  verifyUser(email: string, password: string) {
    this.authService.getUserByEmailAndPassword(CryptoJS.AES.decrypt(email, 'les Jones').toString(CryptoJS.enc.Utf8), CryptoJS.AES.decrypt(password, 'les Jones').toString(CryptoJS.enc.Utf8))
      .subscribe({
        next: (user) => {
          let dataUser = user[0]
          if (CryptoJS.AES.decrypt(email, 'les Jones').toString(CryptoJS.enc.Utf8) === dataUser.email && CryptoJS.AES.decrypt(password, 'les Jones').toString(CryptoJS.enc.Utf8) === dataUser.password) {
            this.isConnected = true;
            console.log("c'est vrai")
          } else {
            this.isConnected = false;
            console.log("c'est faux")
          }
        }
      });
  }

  getUser(email: string, password: string) {
    this.authService.getUserByEmailAndPassword(email, password)
      .subscribe({
        next: (data) =>{
          let dataUser = data[0];
          this.userConnected = new User (dataUser.id,CryptoJS.AES.encrypt(dataUser.email, 'les Jones').toString(), CryptoJS.AES.encrypt(dataUser.password, 'les Jones').toString(), dataUser.role,dataUser.pseudo);
          console.log(this.userConnected);
          if (this.userConnected){
            this.isConnected = true;
            this.route.navigate(['/'])
            localStorage.setItem('User', JSON.stringify(this.userConnected));
          }
        },
        error: (error) => (this.error = error.message),
        complete: () => (this.error = ''),
      });
  }
    get booleanUser(){
      return new Promise<boolean>((resolve, reject) => {
        resolve(this.isConnected);
      })
    }

  disconnectUser() {
  this.isConnected=false
  localStorage.removeItem('User');
  this.userConnected = new User(0,'','','','');
  this.errorMessage = true
  }

}
