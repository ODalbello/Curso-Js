const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) //Chama o parametro dentro do objeto ao qual a função pertence
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e Orientado a Objeto

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()