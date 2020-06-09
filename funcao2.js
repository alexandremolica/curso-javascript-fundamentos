// Armazenando uma fumcao em uma variavel
const imprimeSoma = function(a,b){
    console.log(a + b)
}

imprimeSoma(2, 3)

//Armazendo uma funcao arrow em uma variavel
const soma = (a,b) => {
    return a + b
}

console.log(soma(2,3))

//retorno implicito
const subtracao = (a,b)  => a - b
console.log(subtracao(5,2))

const imprime2 = a => console.log(a)
imprime2('Legal!!!')