function calculadora(a, operacao, b) {
    switch (operacao) {
        case '+':
            console.log(`${a} + ${b} = ${a+b}`)
            break
        case '-':
            console.log(`${a} - ${b} = ${a-b}`)
            break
        case '*':
            console.log(`${a} * ${b} = ${a*b}`)
            break
        case '/':
            console.log(`${a} / ${b} = ${a/b}`)
            break
        default: 
        console.log('Operação Inválida')
    }
}

calculadora(1,'+', 2)
calculadora(1,'-', 2)
calculadora(2,'*', 2)
calculadora(4,'/', 2)
calculadora(2,'.', 2)
calculadora(1,'y', 2)