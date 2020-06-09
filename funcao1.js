function imprimeSoma(a,b){
    console.log(a+b)
}

imprimeSoma(2,5)
imprimeSoma(2) // resultado NaN
imprimeSoma(2,10,5,3,6,7) // resultado 12 ignora os outros param. passados
imprimeSoma() // resultado NaN

//funcao com retorno
function soma(a,b = 1){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma()) // result NaN