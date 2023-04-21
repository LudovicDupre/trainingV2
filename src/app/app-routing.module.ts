import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './component/trainings/trainings.component';
import { CartComponent } from './component/cart/cart.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { FormCustomerComponent } from './component/form-customer/form-customer.component';

import { NotFoundComponent } from './not-found/not-found.component';

import { ConnexionComponent } from './component/connexion/connexion.component';
import { AdminGuard } from './component/admin.guard';



const routes: Routes = [
  {path: 'trainings',component : TrainingsComponent},
  {path: 'cart', component : CartComponent},
  {path:'form-customer', component: FormCustomerComponent},
  {path:'connexion', component: ConnexionComponent},
  {path:'', component: MainPageComponent},
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo  : '/404'},

  {path:'', component: MainPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
