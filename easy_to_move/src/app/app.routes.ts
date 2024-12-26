import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/componentes/login/login.component';
import { MainLayoutComponent } from './layout/main-layout.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./features/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'usuario',
        loadComponent: () =>
          import('./features/usuario/usuario.component').then((m) => m.UsuarioComponent),
      },
      {
        path: 'estoque',
        loadComponent: () =>
          import('./features/estoque/estoque.component').then((m) => m.EstoqueComponent),
      },
      {
        path: 'clientes',
        loadComponent: () =>
          import('./features/clientes/clientes.component').then((m) => m.ClientesComponent),
      },
      {
        path: 'financeiro/recebimentos',
        loadComponent: () =>
          import('./features/financeiro/recebimentos/recebimentos.component').then(
            (m) => m.RecebimentosComponent
          ),
      },
      {
        path: 'fornecedor',
        loadComponent: () =>
          import('./features/fornecedor/fornecedor.component').then(
            (m) => m.FornecedorComponent
          ),
      },
      {
        path: 'vendas',
        loadComponent: () =>
          import('./features/venda/componentes/vendas/vendas.component').then(
            (m) => m.VendasComponent
          ),
      },
      {
        path: 'vendas-lanchonete',
        loadComponent: () =>
          import('./features/venda/componentes/vendas-lanchonete/vendas-lanchonete.component').then(
            (m) => m.VendasLanchoneteComponent
          ),
      },
    ],
  },
  { path: '**', redirectTo: '/login' },
];
