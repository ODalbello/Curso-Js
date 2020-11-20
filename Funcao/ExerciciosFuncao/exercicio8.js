function comparaResultados(resultados) {
    let valores = resultados.split(' ')
    let melhor = valores[0]
    let pior = valores [0]
    let recordes = 0
    let piorjogo = 0
    for(let i = 1; i <= valores.length; i++) {
        if(valores[i] > melhor) {
            melhor = valores [i]
            recordes++
        } 
        if(valores[i] < pior) {
            piorjogo = i + 1
            pior = valores [i]
        }
    }
    return resultado = [recordes, piorjogo]
}

console.log(comparaResultados('30, 40, 20, 4, 51, 25, 42, 38, 56, 0'))