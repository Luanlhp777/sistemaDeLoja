# 🛒 Sistema de Loja com Classes e Objetos

## 📚 Sobre o Projeto

Este projeto foi desenvolvido como atividade prática da disciplina de **Programação e Algoritmos** do curso de **Desenvolvimento de Sistemas**.

O objetivo da atividade foi aplicar conceitos fundamentais de **Programação Orientada a Objetos (POO)** em JavaScript utilizando Node.js, trabalhando com:

- Classes
- Objetos
- Construtores
- Métodos
- Arrays
- Módulos (`require` e `module.exports`)

O sistema simula o funcionamento básico de uma loja, permitindo cadastrar clientes e produtos, registrar compras e listar os produtos disponíveis.

---

## 🚀 Funcionalidades

### 👤 Cliente

Cada cliente possui:

- Nome
- Idade
- E-mail

Métodos:

- Exibir informações do cliente
- Realizar compra de um produto

### 📦 Produto

Cada produto possui:

- Nome
- Preço
- Categoria

Métodos:

- Exibir detalhes do produto

### 🏪 Loja

A loja possui:

- Nome
- Lista de produtos

Métodos:

- Adicionar produtos
- Listar produtos cadastrados

---

## 📂 Estrutura do Projeto

```text
sistemaDeLoja/
│
├── cliente.js
├── produto.js
├── loja.js
├── app.js
└── README.md
```

---

## 🛠️ Tecnologias Utilizadas

- JavaScript
- Node.js

---

## ▶️ Como Executar

### Clone o repositório

```bash
git clone https://github.com/Luanlhp777/sistemaDeLoja.git
```

### Acesse a pasta do projeto

```bash
cd sistemaDeLoja
```

### Execute o programa

```bash
node app.js
```

---

## 📋 Exemplo de Saída

```text
Produto adicionado.
Produto adicionado.
Produto adicionado.

Cliente: Luan
Idade: 33
Email: luan@gmail.com

Cliente: Maria
Idade: 22
Email: maria@email.com

Luan comprou o produto: Suco
Maria comprou o produto: Agua

Produtos cadastrados na loja Adegão:

Produto: Suco
Preço: R$ 10
Categoria: Bebidas

Produto: Refrigerante
Preço: R$ 80
Categoria: Bebidas

Produto: Agua
Preço: R$ 5
Categoria: Bebidas
```

---

## 🎯 Objetivo da Atividade

Praticar os conceitos de Programação Orientada a Objetos (POO), utilizando classes, objetos, métodos, arrays e módulos em JavaScript com Node.js.

---

## 📖 Conceitos Trabalhados

- Classes
- Objetos
- Construtor (`constructor`)
- Métodos
- Encapsulamento básico
- Arrays de objetos
- Modularização de código
- Importação e exportação de módulos
- Organização de projetos Node.js

---

## 👨‍💻 Autor

**Luan Araujo**

🎓 Estudante de Desenvolvimento de Sistemas  
💻 Focado em Desenvolvimento Web, Banco de Dados e JavaScript  
🚀 Em constante evolução através de projetos práticos e estudos diários