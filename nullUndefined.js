let valor // nao inicializada
console.log(valor)

valor = null // ausencia de valor
console.log(valor) 
//console.log(valor.toString()) // erro!

const produto = {}
console.log(produto.preco) // resultado undefined
console.log(produto) // resultado objeto vazio

produto.preco = 3.50
console.log(produto)


produto.preco = undefined // evite atribuir undefined
console.log(!! produto.preco) //resultado false
//delete produto.preco // forma de retirar o atributo 
console.log(produto)

produto.preco = null // sem preço
console.log(!! produto.preco) // resultado false
console.log(produto) // resultado preco null