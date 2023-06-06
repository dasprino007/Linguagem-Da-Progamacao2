/*
programa que solicite nome e a idade da pessoa

se a idade for menor que 3 anos
escreva - não atendemos bebês

se a idade for maior que 3 e menor que 13 
escreva [nome] - faixa infatil

se a idade for maior que 13 e menor que 17 
escreva [nome] - faixa adolecente

se a idade for maior que 17 anos e menror que 65
escreva [nome] - faixa adulta

se a idade for maior que 65 
escreva [nome] - faixa idosa
*/

const leia = require("prompt-sync")();

let usuario = leia("digite o nome do usuário : ")
let ano = parseInt(leia("digite o seu ano : "))
let anoAtual = 2023
let idade = anoAtual - ano

if(ano > anoAtual || idade > 135){
    console.log("idade invalida")
}

else if (idade <= 3) {
    console.log(usuario,"- não atendemos bebês")
}

else if (idade > 3 && idade <= 13) {
    console.log(usuario, "- faixa infatil")
} 

else if (idade > 13 && idade <= 17) {
    console.log(usuario, "- faixa adolecente")
} 

else if (idade > 17 && idade <= 65) {
    console.log(usuario, "- faixa adulta")
} 

else{
    console.log("não atendemos idosos")
} 
