var numero = 1

{
    var numero = 2  // nao existe escopo de bloco 
    console.log('Dentro= ', numero)
}

console.log('Fora= ', numero) // resultado Fora= 2