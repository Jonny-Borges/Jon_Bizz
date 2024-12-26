import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule 
  ],
  templateUrl: './login.component.html',  
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  login() {

    if (this.email === 'admin@teste.com' && this.password === '123456') {
      console.log('Login bem-sucedido!');
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Email ou senha inválidos.';
    }

  }
}
