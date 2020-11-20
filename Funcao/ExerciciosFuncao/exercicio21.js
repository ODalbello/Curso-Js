function calculaPreco(idade) {
    let valorPadrao = 100
    if(idade < 10) {
        return valorPadrao + 80
    } else if (idade >= 10 && idade <= 30) {
        return valorPadrao + 50
    } else if (idade > 30 && idade <= 60) {
        return valorPadrao + 95
    } else if (idade > 60) {
        return valorPadrao + 130
    } else {
        return 'Idade Inválida'
    }
}

console.log(calculaPreco(5))
console.log(calculaPreco(10))
console.log(calculaPreco(11))
console.log(calculaPreco(30))
console.log(calculaPreco(31))
console.log(calculaPreco(60))
console.log(calculaPreco(99))
