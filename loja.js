class Loja {
    constructor(nome) {
        this.nome = nome;
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
        console.log("Produto adicionado.")
    }
    listarProdutos() {
        console.log(this.listarProdutos)

    }
}
//const loja1 = new Loja("Lojao Brás")
//loja1.adicionarProduto("Produto1")
//loja1.adicionarProduto("Produto2")
//loja1.listarProdutos()

module.exports = Loja;