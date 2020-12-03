function receberPrimeiroEUltimoElemento(array) {
    resultado = [];
    resultado.push(array[0])
    resultado.push(array[array.length - 1])
    console.log(resultado)
}
let teste = [1, 2, 3, 4, 5, 7, 9]
let teste2 = [4, 6, 2]

console.log(teste.length, teste2.length)

receberPrimeiroEUltimoElemento(teste)
receberPrimeiroEUltimoElemento(teste2)