# Sistema de Gestão Empresarial - Projeto Jonny Borges

## 📋 Descrição
O **Sistema de Gestão Empresarial** é uma aplicação desktop simples e eficiente, desenvolvida para atender pequenas e médias empresas. Ele centraliza as operações fundamentais de gerenciamento, como controle de estoque, registro de vendas e organização de dados empresariais, com foco em praticidade e usabilidade.

O sistema foi desenvolvido utilizando as seguintes tecnologias:
- **Frontend**: Angular
- **Backend**: Java com Spring Boot
- **Desktop**: Electron

## 🎯 Objetivo
Criar uma solução completa e funcional para empresas que buscam gerenciar seus processos operacionais de forma ágil e prática, sem a necessidade de sistemas complexos.

### Principais Funcionalidades:
- **Gestão de Estoque**: Controle e organização de produtos, com atualização automática.
- **Registro de Vendas**: Cadastro e acompanhamento de vendas realizadas.
- **Gerenciamento de Clientes e Fornecedores**: Centralização de informações relevantes.
- **Interface Simples e Intuitiva**: Foco na experiência do usuário.

## 🚀 Tecnologias Utilizadas
- **Angular**: Para a criação de uma interface moderna e responsiva.
- **Java com Spring Boot**: Backend robusto e confiável.
- **Electron**: Transformação da aplicação web em uma solução desktop multiplataforma.

## 🛠️ Status do Projeto
- Em desenvolvimento.

## 🔗 Como Contribuir
Caso tenha sugestões ou queira colaborar com o projeto, fique à vontade para enviar um pull request ou abrir uma issue.

## 📞 Contato
- Autor: Jonny Borges da Silviera
- Email: [jonnyborges@hotmail]

# 📑 O que foi feito até agora

## 1. Tela de Login
A tela de login foi implementada, onde o usuário pode inserir o e-mail e senha para acessar o sistema.

## 2. Estrutura do Projeto

### Layout Principal
- **Menu Lateral**: O layout principal da aplicação foi criado com um menu lateral que permite ao usuário navegar entre as funcionalidades do sistema. O menu contém os seguintes links:
  - **Home**: Página de boas-vindas.
  - **Estoque**: Página para gestão do estoque.
  - **Produtos**: (Removido, as informações de produto foram integradas diretamente ao estoque).
  
### 3. Páginas Desenvolvidas
- **Página Home**: Página inicial de boas-vindas com mensagens de introdução.
- **Página de Estoque**: Página para cadastrar, editar e listar itens do estoque. Cada item contém informações como preço, descrição e código de barras.

## 4. Funcionalidade de Estoque
- **Cadastro de Produtos no Estoque**: A página de estoque permite cadastrar itens, incluindo campos como **preço**, **descrição**, e **código de barras**.
- **Listagem de Itens no Estoque**: Exibição de todos os itens cadastrados, com suas respectivas informações.

## 5. Rotas
As rotas do Angular estão configuradas da seguinte forma:
- **/login**: Acessa a tela de login.
- **/**: Página inicial, redireciona para a página de **Estoque**.
- **/estoque**: Página onde os itens do estoque são cadastrados e listados.

## 🔧 Instruções para rodar o projeto

### Requisitos
- **Node.js** e **npm** (para o frontend Angular)
- **Java** e **Spring Boot** (para o backend)
- **Electron** (para a versão desktop, se necessário)

### Para rodar o projeto localmente:
1. Clone o repositório.
2. Navegue até a pasta do frontend e instale as dependências:
   ```bash
   npm install
