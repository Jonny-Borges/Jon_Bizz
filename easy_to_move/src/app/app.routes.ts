import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/componentes/login/login.component';
import { MainLayoutComponent } from './layout/main-layout.component';
import { HomeComponent } from './features/home/home.component';
import { UsuarioComponent } from './features/usuario/usuario.component';
import { EstoqueComponent } from './features/estoque/estoque.component';
import { RecebimentosComponent } from './features/financeiro/recebimentos/recebimentos.component';
import { ClientesComponent } from './features/clientes/clientes.component';
import { FornecedorComponent } from './features/fornecedor/fornecedor.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'usuario', component: UsuarioComponent },
      { path: 'estoque', component: EstoqueComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'financeiro/recebimentos', component: RecebimentosComponent },
      { path: 'fornecedor', component: FornecedorComponent }, 
    ],
  },
  { path: '**', redirectTo: '/login' },
];
