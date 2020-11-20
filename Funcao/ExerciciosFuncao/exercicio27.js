function calculaAlturas(altura1, altura2, taxaCresc1, taxaCresc2) {
    if(altura1 > altura2 && taxaCresc1 < taxaCresc2) {
        tempoCrescimento(altura2, altura1, taxaCresc2, taxaCresc1, 2)
    }else if(altura1 < altura2 && taxaCresc1 > taxaCresc2){
        tempoCrescimento(altura1, altura2, taxaCresc1, taxaCresc2, 1)
    }else if(altura1 == altura2) {
        console.log('As duas crianças tem a mesma altura')
    }else {
        console.log('A criança mais baixa não vai passar a mais alta')
    }
}

function tempoCrescimento(altura1, altura2, taxaCresc1, taxaCresc2, criança) {
    let tempo = 0
    do {
        altura1 = altura1 + taxaCresc1
        altura2 = altura2 + taxaCresc2
        tempo++
    } while (altura1 < altura2)
    console.log(`A criança ${criança} vai passar o tamanho da outra em ${tempo} anos`)
}

calculaAlturas(100,120,10,0)
calculaAlturas(150,120,10,25)
calculaAlturas(90,120,10,20)
calculaAlturas(150,120,10,0)
calculaAlturas(120,120,10,0)