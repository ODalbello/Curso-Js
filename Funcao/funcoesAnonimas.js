const soma = function (x, y) {
    return x + y
}

const subtracao = function (x, y) {
    return x - y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(4, 3, subtracao)
imprimirResultado(3, 4, function (x, y) {
    return x * y
})
imprimirResultado(10, 2, (x, y) => x / y)

const pessoa = {
    falar : function () {
        console.log('Opa')
    }
}

pessoa.falar()