import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  cards = [
    { titulo: 'Clientes', descricao: 'Gerencie seus clientes cadastrados.', botao: 'Acessar', link: '/clientes' },
    { titulo: 'Fornecedores', descricao: 'Controle seus fornecedores.', botao: 'Acessar', link: '/fornecedor' },
    { titulo: 'Estoque', descricao: 'Gerencie seu estoque.', botao: 'Acessar', link: '/estoque' },
    { titulo: 'Vendas', descricao: 'Acompanhe suas vendas.', botao: 'Acessar', link: '/vendas' },
    { titulo: 'Alertas', descricao: 'Produtos com estoque baixo.', botao: 'Ver Alertas', link: '/estoque' },
    { titulo: 'Configurações', descricao: 'Ajuste as preferências.', botao: 'Configurar', link: '/configuracoes' },
  ];


}
