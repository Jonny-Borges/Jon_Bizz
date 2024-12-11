import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/componentes/login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent }, // Rota para a tela de login
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona rota raiz para login
    { path: '**', redirectTo: '/login' } // Rota fallback para login
];
