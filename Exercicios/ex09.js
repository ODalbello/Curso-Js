function repetir(param1, param2) {
    resultado =[]
    for(let i = 0; i < param2; i++) {
        resultado.push(param1)
    }
    console.log(resultado)
}

repetir(1, 3)
repetir("almofada", 4)
repetir("Luiz", 7)