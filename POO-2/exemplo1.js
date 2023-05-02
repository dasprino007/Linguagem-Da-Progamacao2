// progamação estruturada

// variaveis + entrada
const leia = require('prompt-sync')()

let altura1 = leia("digite a altura :")
let base1 = leia("digite a base :")
let area1

let altura2 = leia("digite uma outra altura :")
let base2 = leia("digite uma outra base :")
let area2

// procesamento
area1 = base1 * altura1;
area2 = base2 * altura2;

// saida
console.log("a area do retangulo é :",area1);
console.log("a segunda area do retangulo é :",area2);