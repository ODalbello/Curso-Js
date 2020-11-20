function calculaPreço(codigo, quantidade) {
    switch(codigo) {
        case 100:
            return quantidade * 3
            break
        case 200:
            return quantidade * 4
            break
        case 300:
            return quantidade * 5.5
            break 
        case 400:
            return quantidade * 7.5
            break
        case 500:
            return quantidade * 3.5
            break
        case 600:
            return quantidade * 2.8
            break
        default:
            return 'Produto Inexistente'
    }
}

console.log(calculaPreço(100,5))
console.log(calculaPreço(200,5))
console.log(calculaPreço(300,5))
console.log(calculaPreço(400,5))
console.log(calculaPreço(500,5))
console.log(calculaPreço(600,5))
console.log(calculaPreço(700,5))
