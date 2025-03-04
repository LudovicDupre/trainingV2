import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingsComponent } from './component/trainings/trainings.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './component/cart/cart.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { FormCustomerComponent } from './component/form-customer/form-customer.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ConnexionComponent } from './component/connexion/connexion.component';

import { AdminComponent } from './component/admin/admin.component';
import { AddTrainingComponent } from './component/add-training/add-training.component';

import { AdminTestComponent } from './admin-test/admin-test.component';
import { EditTrainingComponent } from './component/edit-training/edit-training.component';




@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    CartComponent,
    NavBarComponent,
    FooterComponent,
    MainPageComponent,
    FormCustomerComponent,
    NotFoundComponent,
    ConnexionComponent,

    AdminComponent,
    AddTrainingComponent,

    AdminTestComponent,
      EditTrainingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
