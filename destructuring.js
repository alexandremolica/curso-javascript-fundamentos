//novo recurso do ES2015

const pessoa = {

    nome: 'Ana',
    idade: 5,
    endereco : {
        logradouro: 'Rua abc',
        numero: 1000
    }
}

// tira de dentro do objeto pessoa: nome e idade
const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n , idade: i} = pessoa
console.log(n, i)

const{sobrenome, bemHumorada = true} = pessoa // sobrenome reulta undefined
console.log(sobrenome, bemHumorada)


const{endereco: {logradouro, numero, cep}} = pessoa // cep resulta undefined
console.log(logradouro, numero, cep)

