console.log(typeof Object) // uma function
console.log(typeof new Object) // um object

const Cliente = function() {}
console.log(typeof Cliente) // uma function
console.log(typeof new Cliente) // um object


class Produto {} //ES 2015 (ES6)
console.log(typeof Produto) // uma function
console.log(typeof new Produto()) // um object