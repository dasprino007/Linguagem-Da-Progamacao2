let equipe1 = 'SANTOS'
let equipe2 = 'SPFC'
let equipe3 = 'SCCP'
let equipe4 = 'SEP'

let pontos1 = 3
let pontos2 = 3
let pontos3 = 3
let pontos4 = 3

const leia = require("prompt-sync")()

//arrays ou vetores
let equipes = ['SANTOS','SPFC','SCCP','SEP']
let pontos = [0,0,0,0]


console.log("TIME\tPONTOS")

for(let i=0; i<equipes.length; i++){
    console.log(equipes[i])
    pontos[i] =parseInt(leia("digite os pontos :"))
}

console.log("tabela")
console.log("TIME\tPONTOS")

for(let i=0; i<equipes.length; i++){
    console.log(equipes[i]+'\t'+pontos[i])
}