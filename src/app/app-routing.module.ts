import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './component/trainings/trainings.component';
import { CartComponent } from './component/cart/cart.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { FormCustomerComponent } from './component/form-customer/form-customer.component';

import { NotFoundComponent } from './component/not-found/not-found.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { AdminGuard } from './component/admin.guard';
import { AdminComponent } from './component/admin/admin.component';
import { AddTrainingComponent } from './component/add-training/add-training.component';
import { EditTrainingComponent } from './component/edit-training/edit-training.component';


const routes: Routes = [

// Décommenter les lignes 2 à 4 du fichier appComponent.htf a quand l'interface admin sera fonctionnelle
  {path:'admin', component : AdminComponent, // Note : modifier la route en "admin"
  canActivate : [AdminGuard] // Garde qui bloque l'accès a la page admin_test (commenter pour y accéder)
},
  {path:'', component: MainPageComponent},
  {path: 'trainings',component : TrainingsComponent},
  {path: 'cart', component : CartComponent},
  {path:'form-customer', component: FormCustomerComponent},
  {path:'connexion', component: ConnexionComponent},
  {path: 'add-training', component : AddTrainingComponent},
  {path: 'admin', component : AdminComponent},
  {path: '404', component: NotFoundComponent},
  {path: 'edit-training', component : EditTrainingComponent},
  {path: '**', redirectTo  : '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
