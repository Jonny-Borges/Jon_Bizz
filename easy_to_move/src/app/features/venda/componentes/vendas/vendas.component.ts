import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

@Component({
  selector: 'app-vendas-generica',
  imports: [
    CommonModule,
    FormsModule, // Adicione aqui para suportar o ngModel
  ],
  standalone: true,
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss'],
})
export class VendasGenericaComponent {

  cpfCliente: string = '';
  nomeCliente: string = '';


  valorUnidade: number = 0;
  valorTotal: number = 0;
  desconto: number = 0;
  total: number = 0;
  // Lista de produtos simulada (base de dados)
  produtosDisponiveis = [
    { id: 1, nome: 'Produto 1', preco: 20 },
    { id: 2, nome: 'Produto 2', preco: 15 },
    { id: 3, nome: 'Produto 3', preco: 10 },
    { id: 4, nome: 'Produto 4', preco: 30 },
  ];

  // Lista de produtos adicionados à venda
  produtosAdicionados: any[] = [];

  // Campo de pesquisa
  filtro = '';

  // Pesquisa e adiciona o produto
  pesquisarProduto() {
    const produtoEncontrado = this.produtosDisponiveis.find(
      (produto) =>
        produto.nome.toLowerCase().includes(this.filtro.toLowerCase()) ||
        produto.id.toString() === this.filtro
    );

    if (produtoEncontrado) {
      this.adicionarProduto(produtoEncontrado);
      this.filtro = ''; // Limpa o campo de pesquisa
    } else {
      alert('Produto não encontrado!');
    }
  }

  // Adiciona um produto à lista
  adicionarProduto(produto: any) {
    const produtoExistente = this.produtosAdicionados.find(
      (p) => p.id === produto.id
    );

    if (produtoExistente) {
      produtoExistente.quantidade++;
      produtoExistente.total = produtoExistente.quantidade * produto.preco;
    } else {
      this.produtosAdicionados.push({
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        quantidade: 1,
        total: produto.preco,
      });
    }
  }

  // Remove um produto da lista
  removerProduto(produto: any) {
    this.produtosAdicionados = this.produtosAdicionados.filter(
      (p) => p.id !== produto.id
    );
  }
}
