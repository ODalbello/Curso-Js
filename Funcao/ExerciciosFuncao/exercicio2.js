function tipoTriangulo(lado1, lado2, lado3) {
    if(lado1 === lado2 && lado1 === lado3) {
        console.log('Este é um triangulo Equilátero')
    } else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {
        console.log('Este é um triangulo Escaleno')
    } else {
        console.log('Este é um triangulo Isósceles')
    }
}

tipoTriangulo(1,1,1)
tipoTriangulo(1,2,1)
tipoTriangulo(1,2,3)
tipoTriangulo(2,2,4)
tipoTriangulo(5,5,5)