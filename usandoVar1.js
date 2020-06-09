{
    {
        {
            {var sera = 'Será???'} //fica visivel fora do bloco
        }
    }
}
console.log(sera)

function teste(){
    var local = 123 // o escopo desta variavel eh local - dento de funcao
    console.log(local)
}

teste()
//console.log(local) // resultado da erro