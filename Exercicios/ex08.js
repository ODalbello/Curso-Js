function multiplicar(numeroA, numeroB) {
    let resultado = 0
    for(let i = 0; i < numeroB; i++) {
        resultado += numeroA
    }
    console.log(resultado)
}

multiplicar(2, 4)
multiplicar(2, 3)
multiplicar(2, 10)