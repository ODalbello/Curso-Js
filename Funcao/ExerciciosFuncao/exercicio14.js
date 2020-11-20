function vendeFrutas(fruta) {
    switch(fruta) {
        case 'maça':
            console.log('Não vendemos essa fruta aqui.')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis.')
            break
        case 'melancia': 
            console.log('Aqui está, são 3 reais o kilo.')
            break
        default:
            console.log('Erro!')
    }
}

vendeFrutas('maça')
vendeFrutas('banana')
vendeFrutas('melancia')
vendeFrutas('kiwi')
vendeFrutas(133)