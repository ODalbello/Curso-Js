function fatorial(numero){
    let i = numero
    do {
        numero = numero * (i -1)
        i--
    } while(i >= 2)
    return numero
}

console.log(fatorial(5))
console.log(fatorial(2))
console.log(fatorial(3))
console.log(fatorial(10))