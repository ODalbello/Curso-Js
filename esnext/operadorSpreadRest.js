// Operador ... rest(juntar) / spread(espalhar)
// usar rest com parâmetro de Função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = {ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Maria', 'Pedro']
const grupoFinal = ['Gloria', ...grupoA, 'Rafaela']
console.log(grupoFinal)