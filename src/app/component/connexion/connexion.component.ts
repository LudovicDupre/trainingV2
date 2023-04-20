import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentificationService/authentification.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit  {
  connexionForm!: FormGroup;

  constructor(private route : Router, private formBuilder: FormBuilder, private authService : AuthentificationService) { }
ngOnInit(): void {

  this.connexionForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
}

connexionUser(form: FormGroup){
  this.authService.getUser(this.connexionForm.value.email, this.connexionForm.value.password);
  this.route.navigateByUrl('');
}


}
