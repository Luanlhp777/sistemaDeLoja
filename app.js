const Cliente = require('./cliente')
const Produto = require('./produto')
const Loja = require('./loja')

const cliente1 = new Cliente("Luan", "33", "luan@gmail.com")
const cliente2 = new Cliente("Maria", 22, "maria@email.com");

const produto1 = new Produto("Suco", 10, "Bebidas")
const produto2 = new Produto("Refrigerante", 80, "Bebidas");
const produto3 = new Produto("Agua", 5, "Bebidas");


const loja1 = new Loja("Adegão")

loja1.adicionarProduto(produto1);
loja1.adicionarProduto(produto2);
loja1.adicionarProduto(produto3);

console.log(cliente1.exibirInfo())
console.log(cliente2.exibirInfo())

console.log(cliente1.comprarProduto(produto1))
console.log(cliente2.comprarProduto(produto3))

loja1.listarProdutos();
