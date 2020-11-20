function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('TV', 1300))
console.log(criarProduto('Microondas', 400))
console.log(criarProduto('Cama', 1800))
console.log(criarProduto('PC', 4000))