import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './component/trainings/trainings.component';
import { CartComponent } from './component/cart/cart.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { FormCustomerComponent } from './component/form-customer/form-customer.component';

import { NotFoundComponent } from './component/not-found/not-found.component';

import { ConnexionComponent } from './component/connexion/connexion.component';
import { AdminGuard } from './component/admin.guard';



const routes: Routes = [
  {path:'', component: MainPageComponent},
  {path: 'trainings',component : TrainingsComponent},
  {path: 'cart', component : CartComponent},
  {path:'form-customer', component: FormCustomerComponent},
  {path:'connexion', component: ConnexionComponent},
  { path: '**', redirectTo  : '/404'},
  { path: '404', component: NotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
