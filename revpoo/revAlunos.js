const leia = require("prompt-sync")()

let matriculas = ["mat01", "mat02", "mat03", "mat04"]
let nomes = ["marcos", "pedro", "maria", "paulo"]
let nota = [0, 0, 0, 0]
let situacao = []


console.log("matri\tnomes\tnota")
console.log("---------------------")
for (i = 0; i < matriculas.length; i++) {
    console.log(matriculas[i] + "\t" + nomes[i] + "\t" + nota[i] + "")
}
console.log("--------------------")
for (i = 0; i < matriculas.length; i++) {
    nota[i] = parseInt(leia("Digite a nota aqui : "))
}

console.log("\nmatri\tnomes\tnota")
console.log("---------------------")
for (i = 0; i < matriculas.length; i++) {

    console.log(matriculas[i] + "\t" + nomes[i] + "\t" + nota[i] + "")
}
console.log("--------------------")
console.log("ALTERAÇÃO DE DADOS")
let codigo = leia("Digite a matricula que deseja troca a nota do aluno : ")
for (let i = 0; i < matriculas.length; i++) {
    if (codigo == matriculas[i]) {
        console.log(nomes[i], "nota atual:", nota[i])
        nota[i] = leia("Digite o nova nota : ")
    }
}

console.log("\nmatri\tnomes\tnota")
console.log("----------------------------")
for (i = 0; i < matriculas.length; i++) {

    console.log(matriculas[i] + "\t" + nomes[i] + "\t" + nota[i] + "")
}
console.log("------------------------")
for (i = 0; i < matriculas.length; i++) {
    if (nota[i] > 5) {
        situacao[i] = "aprovado"
    }

    else {
        situacao[i] = "reprovado"
    }
}

console.log("\nmatri\tnomes\tnota\trecuperação")
console.log("----------------------------------")
for (i = 0; i < matriculas.length; i++) {
    console.log(matriculas[i] + "\t" + nomes[i] + "\t" + nota[i] + "\t" + situacao[i])
}
console.log("----------------------------------")