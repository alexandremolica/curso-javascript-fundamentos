const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4999.90

prod1['Desconto legal'] = 0.40 // evitar atributos com espaco

console.log(prod1)

const prod2 = {
    nome : 'Camisa Polo',
    preco : 79.90
}

console.log(prod2)

//Json nao eh objeto
'{"nome": "Camisa Polo", "preco": 79.90}' //exemplo do formato texto json

