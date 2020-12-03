function maiorOuIgual(n1, n2) {
    if(n1 > n2 || n1 === n2) {
        console.log(true)
    } else {
        console.log(false)
    }
}

maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará true
maiorOuIgual(4, 5) // retornará false