import * as bootstrap from 'bootstrap';


import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Mesa { id: number; pedidos: Pedido[]; }
interface Pedido { produto: string; quantidade: number; preco: number; }



@Component({
  selector: 'app-vendas-lanchonete',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    FormsModule
  ],
  templateUrl: './vendas-lanchonete.component.html',
  styleUrl: './vendas-lanchonete.component.scss'
})
export class VendasLanchoneteComponent {
  mesas: Mesa[] = [];
  mesaAtual: Mesa | null = null;
  novoPedido: Pedido = { produto: '', quantidade: 0, preco: 0 };

  criarMesa() {
    const novaMesa: Mesa = { id: this.mesas.length + 1, pedidos: [] };
    this.mesas.push(novaMesa);
  }

  abrirMesa(id: number) {
    this.mesaAtual = this.mesas.find(mesa => mesa.id === id) || null; this.abrirModal();
  }

  abrirModal() {
    const modalElement = document.getElementById('pedidoModal');
    if (modalElement) { const modal = new bootstrap.Modal(modalElement); modal.show(); }
  }

  adicionarPedido() {
    if (this.mesaAtual && this.novoPedido.produto && this.novoPedido.quantidade > 0 && this.novoPedido.preco > 0) {
      this.mesaAtual.pedidos.push({ ...this.novoPedido });
      this.novoPedido = { produto: '', quantidade: 0, preco: 0 };
      const modalElement = document.getElementById('pedidoModal');
      if (modalElement) {
        const modal = bootstrap.Modal.getInstance(modalElement); if (modal) { modal.hide(); }
      }
    }
  }
}