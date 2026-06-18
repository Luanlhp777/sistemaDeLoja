class Produto {
    constructor(nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
    exibirDetalhes() {
        return `Produto: ${this.nome} Valor: ${this.preco} Categoria: ${this.categoria}`
    }
}

// const produto1 = new Produto("Suco", "10.00", "Bebida")
// console.log(produto1.exibirDetalhes());

module.exports = Produto;