import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/componentes/login/login.component';
import { MainLayoutComponent } from './layout/main-layout.component';
import { HomeComponent } from './features/home/home.component';
import { EstoqueComponent } from './features/estoque/estoque.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirecionamento para Home
      { path: 'home', component: HomeComponent },           // Página inicial
      { path: 'estoque',component: EstoqueComponent },
      // Adicione outras rotas filhas conforme necessário:
      // { path: 'estoque', component: EstoqueComponent },
      // { path: 'produtos', component: ProdutosComponent },
    ],
  },
  { path: '**', redirectTo: '/login' },  // Redireciona qualquer caminho inválido para login
  { path: 'estoque',component: EstoqueComponent },
];
