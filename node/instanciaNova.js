// Uma factory retorna um novo objetos
module.exports = () => {
    return {
        valor: 1, 
        inc() {
            this.valor++
        }
    }
}