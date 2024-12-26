import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn(): boolean {
    return false; // Simulando que o usuário não está logado
  }

  login(email: string, password: string): boolean {
    console.log('Simulando login com:', email, password);
    return email === 'admin@teste.com' && password === '123456';
  }
}
