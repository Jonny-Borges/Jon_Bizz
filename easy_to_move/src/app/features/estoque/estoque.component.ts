import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss'],
})
export class EstoqueComponent implements OnInit {
  produtos: any[] = []; // Lista original de produtos
  produtosFiltrados: any[] = []; // Lista para exibir produtos filtrados

  // Objeto de filtros
  filtros = {
    codigoInterno: '',
    descricao: '',
    marca: '',
    fornecedor: '',
    codigoBarras: '',
  };

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    // Dados simulados
    this.produtos = [
      {
        codigo: 1,
        referencia: 'Ref-001',
        descricao: 'Notebook',
        marca: 'Dell',
        fornecedor: 'Fornecedor A',
        codigoBarras: '123456789',
        grade: 'Única',
        quantidade: 15,
        precoVenda: 3500.0,
        precoCusto: 2800.0,
      },
      {
        codigo: 2,
        referencia: 'Ref-002',
        descricao: 'Cadeira Gamer',
        marca: 'DXRacer',
        fornecedor: 'Fornecedor B',
        codigoBarras: '987654321',
        grade: 'Única',
        quantidade: 8,
        precoVenda: 1200.0,
        precoCusto: 900.0,
      },
      {
        codigo: 3,
        referencia: 'Ref-003',
        descricao: 'Mouse',
        marca: 'Logitech',
        fornecedor: 'Fornecedor A',
        codigoBarras: '456123789',
        grade: 'Única',
        quantidade: 25,
        precoVenda: 150.0,
        precoCusto: 100.0,
      },
    ];

    // Inicializa a lista exibida com todos os produtos
    this.produtosFiltrados = [...this.produtos];
  }

  filtrarProdutos(): void {
    // Aplica os filtros na lista de produtos
    this.produtosFiltrados = this.produtos.filter((produto) => {
      const { codigoInterno, descricao, marca, fornecedor, codigoBarras } =
        this.filtros;

      return (
        (!codigoInterno || produto.codigo.toString().includes(codigoInterno)) &&
        (!descricao || produto.descricao.toLowerCase().includes(descricao.toLowerCase())) &&
        (!marca || produto.marca.toLowerCase().includes(marca.toLowerCase())) &&
        (!fornecedor || produto.fornecedor.toLowerCase().includes(fornecedor.toLowerCase())) &&
        (!codigoBarras || produto.codigoBarras.includes(codigoBarras))
      );
    });
  }

  limparFiltros(): void {
    // Limpa os filtros e exibe todos os produtos
    this.filtros = {
      codigoInterno: '',
      descricao: '',
      marca: '',
      fornecedor: '',
      codigoBarras: '',
    };
    this.filtrarProdutos();
  }

  editarProduto(produto: any): void {
    console.log('Editar produto:', produto);
    // Aqui você pode implementar a lógica de edição
  }

  excluirProduto(produto: any): void {
    console.log('Excluir produto:', produto);
    // Aqui você pode implementar a lógica de exclusão
  }
}
