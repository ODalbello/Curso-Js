function maiorMenor(vetor) {
    let menor = vetor[0]
    let maior = vetor[0]
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < menor){
            menor = vetor[i]
        } else if (vetor[i] > maior) {
            maior = vetor[i]
        }
    }
    return `O menor valor é ${menor} e o maior valor é ${maior}`
}

vetor = [2, 3, 4, 5, 6, 7, 8, 1, 0, 10, 5, 22]
console.log(maiorMenor(vetor))