// classe = molde de varios objetos

class retangulo {
    constructor(altura,base){
        this.altura = altura;
        this.base = base;
    }

    MostrarArea(){
    console.log("area do retangulo é",this.altura*this.base)
    }
}


//progama principal
const leia = require('prompt-sync')()

let base1 = leia("digite a Base 1 : ")
let altura1 = leia("digite a altura 1 : ")
let base2 = leia("digite a base 2 : ")
let altura2 = leia("digite a altura 2 : ")

let objeto1 = new retangulo(base1,altura1)
let objeto2 = new retangulo(4,2)

console.log("base obj1 :",objeto1.base)

objeto1.MostrarArea()
objeto2.MostrarArea()