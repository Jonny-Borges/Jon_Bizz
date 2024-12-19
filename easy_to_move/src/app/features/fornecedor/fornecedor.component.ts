import * as bootstrap from 'bootstrap';

import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';






@Component({
  selector: 'app-fornecedor',
  standalone: true,
  imports: [
    CommonModule,
    NgFor
  ],
  templateUrl: './fornecedor.component.html',
  styleUrl: './fornecedor.component.scss'
})
export class FornecedorComponent {


  fornecedores = [
    {
      nome: 'Fornecedor Exemplo',
      cnpj: '00.000.000/0001-00',
      telefone: '(00) 00000-0000'
      , email: 'exemploemail.com'
    }
  ];

  adicionarFornecedor() {
    
    const nome = (document.getElementById('nomeFornecedor') as HTMLInputElement).value;
    const cnpj = (document.getElementById('cnpjFornecedor') as HTMLInputElement).value;
    const telefone = (document.getElementById('telefoneFornecedor') as HTMLInputElement).value;
    const email = (document.getElementById('emailFornecedor') as HTMLInputElement).value; this.fornecedores.push({ nome, cnpj, telefone, email });

    // Fechar o modal 
    const modal = document.getElementById('adicionarFornecedorModal');
    if (modal) {
      const bootstrapModal = bootstrap.Modal.getInstance(modal);
      //bootstrap.Modal.getInstance(modal); bootstrapModal?.hide();
    }
  }


}
