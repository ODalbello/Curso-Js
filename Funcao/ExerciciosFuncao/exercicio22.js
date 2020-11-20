function calculaAnuidade (mesPagamento, valorAnuidade) {
    return (valorAnuidade * Math.pow((1 + 0.05),mesPagamento).toFixed(2))
}

console.log(calculaAnuidade(12, 1000))