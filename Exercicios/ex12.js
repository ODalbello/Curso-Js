function removerProriedade(objeto, propriedade) {
    const copia = {...objeto}
    delete objeto[propriedade]
    console.log(objeto)
}

let a = {a: 1, b: 2, c: 3, d: 4}
removerProriedade(a, "c")