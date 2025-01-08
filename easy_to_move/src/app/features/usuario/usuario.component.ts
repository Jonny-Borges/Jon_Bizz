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

  usuarios: any[] = []; // Lista de usuários (será preenchida com os dados do backend)
  modalAberto: boolean = false; // Controle do modal de cadastro/edição
  modalExclusaoAberto: boolean = false; // Controle do modal de confirmação de exclusão
  isEditing: boolean = false; // Verifica se é uma edição
  usuarioAtual: any = {}; // Usuário sendo editado ou criado
  usuarioParaExcluir: any = null; // Usuário a ser excluído

  // Abrir modal de cadastro
  abrirModal() {
    this.usuarioAtual = { nome: '', email: '', senha: '' }; // Reseta os campos
    this.isEditing = false;
    this.modalAberto = true;
  }

  // Abrir modal de edição
  abrirModalEdicao(usuario: any) {
    this.usuarioAtual = { ...usuario }; // Preenche com os dados do usuário selecionado
    this.isEditing = true;
    this.modalAberto = true;
  }

  // Fechar modal de cadastro/edição
  fecharModal() {
    this.modalAberto = false;
  }

  // Salvar usuário (criação ou edição)
  salvarUsuario() {
    if (this.usuarioAtual.nome && this.usuarioAtual.email) {
      if (this.isEditing) {
        // Encontra o índice do usuário com base no ID
        const index = this.usuarios.findIndex(u => u.id === this.usuarioAtual.id);
        if (index !== -1) {
          this.usuarios[index] = { ...this.usuarioAtual }; // Atualiza o usuário na lista
        }
      } else {
        // Gera um ID temporário para novos usuários
        const novoUsuario = { ...this.usuarioAtual, id: Date.now() };
        this.usuarios.push(novoUsuario); // Adiciona o novo usuário
      }
  
      // Atualiza a referência do array para forçar a detecção de mudanças
      this.usuarios = [...this.usuarios];
      this.fecharModal();
  
      console.log(this.isEditing ? 'Usuário editado:' : 'Usuário criado:', this.usuarioAtual);
    }
  }
  

  // Abrir modal de confirmação de exclusão
  confirmarExclusao(usuario: any) {
    this.usuarioParaExcluir = usuario;
    this.modalExclusaoAberto = true;
  }

  // Fechar modal de confirmação de exclusão
  fecharModalExclusao() {
    this.modalExclusaoAberto = false;
    this.usuarioParaExcluir = null;
  }

  // Excluir usuário
  excluirUsuario() {
    if (this.usuarioParaExcluir) {
      const index = this.usuarios.indexOf(this.usuarioParaExcluir);
      if (index > -1) {
        this.usuarios.splice(index, 1); // Remove o usuário da lista
        console.log('Usuário excluído:', this.usuarioParaExcluir);
      }
      this.fecharModalExclusao();
    }
  }
}
