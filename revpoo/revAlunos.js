const leia = require("prompt-sync")()

let matriculas = ["mat01","mat02","mat03","mat04"]
let nomes = ["marcos","pedro","maria","paulo"]
let nota = [0,0,0,0]

console.log("matri\tnomes\tnota")
console.log("---------------------")
for(i = 0; i < matriculas.length; i++){
    console.log(matriculas[i] + "\t" + nomes[i] + "\t" + nota[i] + "")
    console.log("--------------------")
}

for(i = 0; i < matriculas.length; i++){
    nota[i] = parseInt(leia("Digite a nota aqui : "))
}

console.log("matri\tnomes\tnota")
console.log("---------------------")
for(i = 0; i < matriculas.length; i++){
    console.log(matriculas[i] + "\t" + nomes[i] + "\t" + nota[i] + "")
    console.log("--------------------")
}

console.log("ALTERAÇÃO DE DADOS")
let codigo = leia("Digite a matricula que deseja troca o nome : ")
for(let i=0; i<matriculas.length; i++){
    if(codigo == matriculas[i]){
        console.log("Nome atual do aluno "+ nomes[i])
         nomes[i] = leia("Digite o novo nome : ")
}
}

console.log("matri\tnomes\tnota")
console.log("---------------------")
for(i = 0; i < matriculas.length; i++){
    console.log(matriculas[i] + "\t" + nomes[i] + "\t" + nota[i] + "")
    console.log("--------------------")
}