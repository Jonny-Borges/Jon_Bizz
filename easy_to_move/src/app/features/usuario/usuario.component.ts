import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent {
  isEditing: any;
  closeModal() {
    throw new Error('Method not implemented.');
  }
  usuarios: any[] = []; // Lista de usuários (será preenchida com os dados do backend)
  modalAberto: boolean = false;

  // Dados do novo usuário
  novoUsuario = {
    nome: '',
    email: '',
    senha: '',
  };

  usuario = {
    email: '',
    nome: '',
    senha: ''
  };

  abrirModal() {
    this.novoUsuario = { nome: '', email: '', senha: '' }; // Reseta os campos do formulário
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }

  salvarUsuario() {
    if (this.novoUsuario.nome && this.novoUsuario.email && this.novoUsuario.senha) {
      this.usuarios.push({ ...this.novoUsuario }); // Adiciona o novo usuário na lista local (simulação)
      this.fecharModal();
      console.log('Usuário salvo:', this.novoUsuario);
    }
  }

  editarUsuario(usuario: any) {
    console.log('Editar:', usuario);
    // Abrir o modal com os dados do usuário a ser editado
  }

  excluirUsuario(usuario: any) {
    const index = this.usuarios.indexOf(usuario);
    if (index > -1) {
      this.usuarios.splice(index, 1);
      console.log('Usuário excluído:', usuario);
    }
  }

  saveUser() {
    if (this.usuario.email && this.usuario.nome && this.usuario.senha) {
      console.log('Usuário salvo:', this.usuario);
      this.closeModal();
      // chamar o backend para salvar no banco
    }
  }

}
