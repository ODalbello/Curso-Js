const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) //retorna um valor vazio pois não encontrou valor 
console.log(escola.charCodeAt(3)) //retorna valor da tabela Unicode
console.log(escola.indexOf('3')) //retorna o indice do valor na string

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))
console.log('Escola '.concat(escola.replace(3, 'e')).concat("!"))

console.log('Ana,Maria,Pedro'.split(','))