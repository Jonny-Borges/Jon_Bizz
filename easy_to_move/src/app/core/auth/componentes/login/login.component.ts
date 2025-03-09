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

      //alterado o home para estoque, por hora, mas o normal deve ser home como dito no comentario abaixo
      this.router.navigate(['/estoque']); // Redireciona para a rota "/home"
    } else {
      this.errorMessage = 'Email ou senha inválidos.'; // Mostra a mensagem de erro
    }
  }

 
}