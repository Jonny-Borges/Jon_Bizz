# Easy to Move - Sistema de Gestão Empresarial

## Visão Geral
Easy to Move é um sistema de gestão empresarial desenvolvido em Angular 18, Node.js e Spring Boot. Ele oferece funcionalidades para gerenciamento de clientes, fornecedores, estoque, financeiro e vendas. O projeto foi estruturado para atender negócios de diferentes segmentos, com foco em simplicidade e eficiência.

---

## Estrutura de Pastas

```
- src/
  - app/
    - core/
      - auth/
        - componentes/login/
          - login.component.html
          - login.component.ts
      - menu/
        - menu.component.html
        - menu.component.ts
    - features/
      - clientes/
      - estoque/
      - financeiro/
      - fornecedor/
      - home/
      - usuario/
      - vendas/
        - componentes/
          - vendas/
            - vendas.component.html
            - vendas.component.ts
          - vendas-lanchonete/
            - vendas-lanchonete.component.html
            - vendas-lanchonete.component.ts
  - shared/
    - app.component.html
    - app.component.ts
  - app.routes.ts
  - styles.scss
```

---

## Funcionalidades

### 1. Gestão de Clientes
- Cadastro, edição e exclusão de clientes.
- Visualização de lista de clientes.

### 2. Gestão de Fornecedores
- Cadastro, edição e exclusão de fornecedores.
- Gerenciamento de informações de contato e produtos fornecidos.

### 3. Estoque
- Controle de produtos em estoque.
- Atualização de quantidades e visualização de detalhes.

### 4. Vendas
#### **Vendas Genéricas**
- Registro de vendas rápidas sem imposto ou carrinho.
- Exibição de produtos adicionados à venda com total calculado.

#### **Vendas para Lanchonetes**
- Criação e controle de mesas.
- Adição de produtos por mesa.
- Subtotais e gerenciamento individualizado por mesa.

### 5. Financeiro
- Planejamento e controle de entradas e saídas financeiras.
- Relatórios de vendas e despesas (em desenvolvimento).

---

## Tecnologias Utilizadas
- **Frontend:** Angular 18 (standalone components) e Bootstrap.
- **Backend:** Node.js e Spring Boot.
- **Banco de Dados:** Em desenvolvimento.

---

## Configuração do Projeto

### Pré-requisitos
- Node.js (v20.18.0 ou superior).
- Angular CLI (v18.2.12).

### Instalação
1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   ng serve
   ```

4. Acesse em: [http://localhost:4200](http://localhost:4200).

---

## Próximos Passos

1. Implementar o **fechamento de mesas** na funcionalidade de vendas-lanchonete.
2. Desenvolver o **histórico de vendas** com registros detalhados.
3. Criar relatórios financeiros exportáveis (PDF/Excel).

---

## Contribuidores
- **Jonny Borges da Silviera** - Desenvolvedor Full Stack Junior.

---

## Licença
Este projeto está sob a licença MIT.
