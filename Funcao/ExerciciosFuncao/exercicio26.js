function encontraPares() {
    let numero = 1
    do {
        if ((numero % 2) == 0) {
            console.log(`${numero} é par`)
            numero++
        } else {
            numero++
        }
    } while (numero <= 100)
}

encontraPares()