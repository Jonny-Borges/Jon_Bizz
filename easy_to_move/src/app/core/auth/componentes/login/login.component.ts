import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule 
  ],
  templateUrl: './login.component.html',  
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  // Método para tratar o login
  login() {
    console.log('Email:', this.email);
    console.log('Senha:', this.password);
    // Aqui futuramente você chamará o serviço para autenticação
  }

}
