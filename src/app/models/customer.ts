export class Customer{

  name:string;
  firstName:string;
  adress:string;
  phone:string;
  email:string

  constructor( name:string, firstName:string, adress:string, phone:string, email:string){
    this.name = name;
    this.firstName = firstName;
    this.adress = adress;
    this.phone = phone;
    this.email = email
  }
}
