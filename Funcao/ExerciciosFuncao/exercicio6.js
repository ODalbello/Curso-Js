function jurosSimples(capital, taxa, tempo) {
    let montante = capital * taxa * tempo
    console.log(`O montante em juros simples é de R$ ${montante + capital}`)
}

function jurosCompostos(capital, taxa, tempo) {
    console.log('O montante em juros compostos é de R$', (capital * Math.pow((1 + taxa),tempo).toFixed(2)))
    }

jurosSimples(1000, 0.1, 3)
jurosCompostos(1000, 0.1, 3)