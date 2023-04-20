import { Component } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentificationService/authentification.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {


constructor(private authService : AuthentificationService) {
}

isAdmin() {
 return this.authService.isAdmin() ;
}
userConnected() {
  return this.authService.isConnected;
}
disconnectUser() {
  this.authService.disconnectUser();
}
}
