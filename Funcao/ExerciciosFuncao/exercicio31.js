function contaNegativos(vetor) {
    let qtdNegativos = 0
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] > 0) {
            qtdNegativos++
        }
    }
    return `Existem ${qtdNegativos} números negativos nesse vetor`
}

vetor = [0, 1, -2, 3, -4, 5, 6, -7, 8, -9, -12]
console.log(contaNegativos(vetor))