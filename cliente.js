class Cliente {
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
    exibirInfo() {
        return `Cliente: ${this.nome} Idade: ${this.idade} Email: ${this.email}`
    }
    comprarProduto(produto) {
        return `Cliente: ${this.nome} comprou o produto: ${produto.nome}`
    }

}
// const cliente1 = new Cliente("Luan", "33", "luan@gmail.com")
// console.log(cliente1.exibirInfo());

module.exports = Cliente;