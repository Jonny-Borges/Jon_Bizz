import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule 
  ],
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';



  constructor(private authService: AuthService, private router: Router) {}

  handleLogin() {
    if (this.authService.login(this.email, this.password)) {
      this.errorMessage = ''; // Limpa a mensagem de erro se o login foi bem-sucedido
      this.router.navigate(['/home']); // Redireciona para a rota "/home"
    } else {
      this.errorMessage = 'Email ou senha inválidos.'; // Mostra a mensagem de erro
    }
  }

 
}