function diaDaSemana(dia) {
    switch (dia) {
        case 1: 
        case 8:
        case 15:
        case 22:
        case 29:
            console.log(`Dia ${dia} é Domingo`)
            break
        case 2:
        case 9:
        case 16:
        case 23:
        case 30:
            console.log(`Dia ${dia} é Segunda-Feira`)
            break
        case 3:
        case 10:
        case 17:
        case 24:
        case 31:
            console.log(`Dia ${dia} é Terça-Feira`)
            break
        case 4:
        case 11:
        case 18:
        case 25: 
            console.log(`Dia ${dia} é Quarta-Feira`)
            break
        case 5:
        case 12:
        case 19:
        case 26:
            console.log(`Dia ${dia} é Quinta-Feira`)
            break
        case 6:
        case 13:
        case 20:
        case 27:
            console.log(`Dia ${dia} é Sexta-Feira`)
            break
        case 7:
        case 14:
        case 21:
        case 28:
            console.log(`Dia ${dia} é Sábado`)
            break
        default: 
            console.log("Dia Inválido")
    }
}

diaDaSemana(1)
diaDaSemana(14)
diaDaSemana(13)
diaDaSemana(31)
diaDaSemana(45)
diaDaSemana(0)
diaDaSemana(9)