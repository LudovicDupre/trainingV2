import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CartService } from 'src/app/services/cartService/cart.service';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.css']
})
export class FormCustomerComponent implements OnInit {
  myForm! : FormGroup;

  customer: Customer = new Customer(
    '',
    '',
    '',
    '',
    ''
  );
constructor(private formBuilder : FormBuilder, private cartService : CartService) {

}

ngOnInit() {

  this.myForm = this.formBuilder.group({
    name: [this.customer.name,[ Validators.required, Validators.minLength(10)]],
    firstName: [this.customer.firstName, Validators.required],
    adress : [this.customer.adress, Validators.required],
    phone : [this.customer.phone, Validators.required],
    email : [this.customer.email, Validators.required]

  })
}
onSaveCustomer(form: FormGroup)  {
  console.log(form.errors)
  if(form.valid){
    this.cartService.saveCustomer(new Customer(form.value.name, form.value.firstName, form.value.adress, form.value.phone, form.value.email));
  }

}

get phone() {
  return this.myForm.get('phone');
}
get name() {
  return this.myForm.get('name');
}
getCustomer() {

}
}
