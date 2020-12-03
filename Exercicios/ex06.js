function inverso(valor) {
    const tipo = typeof valor
    if(tipo == "boolean") {
        console.log(!valor)
    } else if (tipo == "number") {
        console.log(-valor)
    } else {
        console.log("Booleano ou números esperado, mas o parâmetro é do tipo string")
    }
}

inverso(true)
inverso("6")
inverso(-2000)
inverso("programação")