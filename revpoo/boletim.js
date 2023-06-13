const leia = require("prompt-sync")();

let nome = []
let nota = []
let recuperação = []

for(let i = 0; i < 4; i++ ){
    nome[i] = leia("coloque o nome aqui :")
    nota[i] = parseInt(leia("coloque a nota aqui :"))

    if(nota[i] >= 5){
        recuperação[i] = "aprovado"
    }
    else if (nota[i] < 5){
        recuperação[i] = "reprovado"
    }
}

console.log("tabela")
console.log("NOME\tNOTA\tAPROVADO?")

for(let i=0; i<nome.length; i++){
    console.log(nome[i]+'\t'+nota[i]+'\t'+recuperação[i])
}