let drobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //retorno é implícito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'  //Possui um parametro
console.log(ola())