import { Component } from '@angular/core';
import { AuthentificationService } from './services/authentificationService/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trainingsV2';
  authService : AuthentificationService | undefined;
}
