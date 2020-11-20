function tratarErroELancar(erro) {
    //trow new Error('...')
    //throw 10
    //throw true
    //trow 'mensagem'
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {name: 'Roberto' }
imprimirNomeGritando(obj)