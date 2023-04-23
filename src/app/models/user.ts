export class User {
  id: number;
  email: string;
  password: string;
  pseudo:string;
  role: string;

  constructor(id: number, email: string, password: string, role: string, pseudo: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.pseudo = pseudo;
    this.role = role;
  }
}
