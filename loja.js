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
        console.log(`Produtos cadastrados na loja ${this.nome}:`)

        this.produtos.forEach((produto) => {
            console.log(`Produto: ${produto.nome}`);
            console.log(`Preço: R$ ${produto.preco}`);
            console.log(`Categoria: ${produto.categoria}`);
        });
    }
}
//const loja1 = new Loja("Lojao Brás")
//loja1.adicionarProduto("Produto1")
//loja1.adicionarProduto("Produto2")
//loja1.listarProdutos()

module.exports = Loja;