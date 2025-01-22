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
    if (!this.filtro.trim()) {
      alert('Digite algo no campo de pesquisa antes de buscar um produto.');
      return;
    }

    const produtoEncontrado = this.produtosDisponiveis.find(
      (produto) =>
        produto.nome.toLowerCase().includes(this.filtro.toLowerCase()) ||
        produto.id.toString() === this.filtro
    );

    if (produtoEncontrado) {
      this.adicionarProduto(produtoEncontrado);
      this.filtro = '';
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

  getTotalGeral(): number {
    return this.produtosAdicionados.reduce((total, produto) => {
      return total + (produto.total || 0);
    }, 0);
  }

  // Formata o total geral como string
  getTotalGeralFormatado(): string {
    const total = this.getTotalGeral();
    return `R$ ${total.toFixed(2)}`; // Formata o total como string
  }

  finalizarVenda() {
    if (this.produtosAdicionados.length === 0) {
      alert('Não há produtos na lista para finalizar a venda.');
      return;
    }

   // if (!this.nomeCliente.trim()) {
   //   alert('Por favor, preencha o nome do cliente.');
    //  return;
    //}

    // Reunir os dados da venda
    const dadosVenda = {
      cliente: {
        nome: this.nomeCliente,
        cpf: this.cpfCliente || 'Não informado',
      },
      produtos: this.produtosAdicionados,
      total: this.getTotalGeral(),
      desconto: this.desconto,
      totalComDesconto: this.getTotalGeral() - this.desconto,
    };

    // Simular envio (por enquanto, apenas logar no console)
    console.log('Venda finalizada:', dadosVenda);

    alert('Venda finalizada com sucesso!');
    this.limparVenda(); // Limpar os dados após finalizar
  }

  limparVenda() {
    this.produtosAdicionados = [];
    this.cpfCliente = '';
    this.nomeCliente = '';
    this.filtro = '';
    this.desconto = 0;
    this.valorUnidade = 0;
    this.valorTotal = 0;
  }





}
