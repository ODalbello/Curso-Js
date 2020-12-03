const pilotos = ['Vettel', 'Alonso', 'Raikkoen', 'Massa']
pilotos.pop() //Massa quebrou o carro -- Remove o ultimo elemento do Array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemtno na Array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento da Lista
console.log(pilotos)

pilotos.unshift('Hamilton') //Insere o elemento no inicio do array
console.log(pilotos)

// Splice pode adicinar ou remover elementos para
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3, 1) //Remove um elemento da 3 posição
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Novo Array partindo do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)