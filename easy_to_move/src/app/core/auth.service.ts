import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInKey = 'isLoggedIn';

  // Verifica se o usuário está logado, baseado no estado salvo
  isLoggedIn(): boolean {
    return localStorage.getItem(this.loggedInKey) === 'true';
  }

  // Simula o login e salva o estado de autenticação
  login(email: string, password: string): boolean {
    if (email === 'admin@teste.com' && password === '123456') {
      localStorage.setItem(this.loggedInKey, 'true'); // Salva o estado como logado
      return true;
    }
    return false;
  }

  // Adicione um método de logout para limpar o estado de login
  logout(): void {
    localStorage.removeItem(this.loggedInKey); // Remove o estado de login
  }
}



