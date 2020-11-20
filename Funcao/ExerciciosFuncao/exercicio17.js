function calculaSalario (plano, salario) {
    switch(plano) {
        case 'a':
            return salario + (salario * 0.10)
            break
        case 'b':
            return salario + (salario * 0,15)
            break
        case 'c':
            return salario + (salario * 0,20)
            break
        default:
            return "Plano Inválido"
    }
}

console.log(calculaSalario('a', 100))
console.log(calculaSalario('b', 100))
console.log(calculaSalario('c', 100))
console.log(calculaSalario('d', 100))