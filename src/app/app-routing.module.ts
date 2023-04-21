import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './component/trainings/trainings.component';
import { CartComponent } from './component/cart/cart.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { FormCustomerComponent } from './component/form-customer/form-customer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { AdminGuard } from './component/admin.guard';
import { AdminComponent } from './component/admin/admin.component';
import { AddTrainingComponent } from './component/add-training/add-training.component';



const routes: Routes = [
  {path: 'trainings',component : TrainingsComponent},
  {path: 'cart', component : CartComponent},
  {path:'form-customer', component: FormCustomerComponent},
  {path:'connexion', component: ConnexionComponent},
  {path: 'add-training', component : AddTrainingComponent},
  {path: 'admin', component : AdminComponent},
  {path:'', component: MainPageComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo  : '/404'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
