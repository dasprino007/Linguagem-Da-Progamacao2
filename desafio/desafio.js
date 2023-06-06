const leia = require("prompt-sync")();

// leia o nome do usuario

// ler o salario do usuario
// se o salario for menor 2500 a pessoa é isenta
// se o salario for acima 2500 é neri que 500
// paga impostos de 15% - mostra imposto e salario liquido
// se o salario for acima de 5000 paga imposto de 25%
// mostra salario liquido e imposto a paga

//  variaveis
let usuario = leia("digite o nome do usuário : ")
let salario = parseInt(leia("digite o valor do salario : "))
let valorImposto = parseInt

if (salario <= 2500) {
    console.log(usuario + ",você é isento")
}

else if (salario > 2500 && salario <= 5000) {
    valorImposto = salario*0.15
    console.log(usuario + ",voce pagara 15% de imposto então o seu salario sera", salario - valorImposto, "o imposto é de", valorImposto)
} 

else if (salario > 5000) {
    valorImposto = salario*0.25
    console.log(usuario + ",voce pagara 25% de imposto então o seu salario sera", salario - valorImposto, "o imposto é de", valorImposto)
}

//fim do progama
console.log("fim do programa")