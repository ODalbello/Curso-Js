function mediaAritmetica(vetor){
    let somaValores = 0
    for(let i = 0; i < vetor.length; i++){
        somaValores += vetor[i]
    }
    return `A média aritmética é ${(somaValores/vetor.length)}`
}

vetor = [10, 10, 10, 10, 10]
console.log(mediaAritmetica(vetor))