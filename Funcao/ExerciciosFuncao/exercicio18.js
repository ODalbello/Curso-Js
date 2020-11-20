function escreveExtenso(numero) {
    switch(numero) {
        case 0:
            return 'Zero'
            break
        case 1: 
            return 'Um'
            break
        case 2: 
            return 'Dois'
            break
        case 3:
            return 'Tres'
            break 
        case 4: 
            return 'Quatro'
            break
        case 5: 
            return 'Cinco'
            break
        case 6:
            return 'Seis'
            break
        case 7:
            return 'Sete'
            break
        case 8:
            return 'Oito'
            break
        case 9:
            return 'Nove'
            break
        case 10:
            return 'Dez'
            break
        default:
            return "Número fora do Intervalo"
    }
}

console.log(escreveExtenso(1))
console.log(escreveExtenso(2))
console.log(escreveExtenso(5))
console.log(escreveExtenso(0))
console.log(escreveExtenso(11))
console.log(escreveExtenso(2445))
console.log(escreveExtenso(9))