const leia = require("prompt-sync")()

class pessoa {
    constructor(cpf,nome,anoNascimento){
        this.cpf = cpf
        this.nome = nome
        this.anoNascimento = anoNascimento
    }

    mostrarIdade(){
        console.log(2023-this.anoNascimento)
    }
}

class aluno extends pessoa{
    constructor(cpf,nome,anoNascimento,matricula,nota){
        super(cpf,nome,anoNascimento)
        this.matricula = matricula
        this.nota = nota
    }
    mudarNota(){
        this.nota = parseInt(leia("coloque a nota do aluno:"))
    }
}

//progama principal

let p1 = new aluno("111.222.333-444","Marcos",2008,"mat01",0)
let p2 = new aluno("222.111.333-44","Maria",2007,"mat02",0)
let p3 = new aluno("222.444.818-66","Maria",2006,"mat03",0)
let p4 = new aluno("661.262.903-384","sintia",2008,"mat04",0)


console.log("matri\tnomes\tnota")
console.log("---------------------")
console.log(p1.matricula + "\t" + p1.nome + "\t" + p1.nota)
console.log(p2.matricula + "\t" + p2.nome + "\t" + p2.nota)
console.log(p3.matricula + "\t" + p3.nome + "\t" + p3.nota)
console.log(p4.matricula + "\t" + p4.nome + "\t" + p4.nota)
console.log("---------------------")

console.log("digita de notas")
console.log(p1.nome)
p1.mudarNota()
console.log(p2.nome)
p2.mudarNota()
console.log(p3.nome)
p3.mudarNota()
console.log(p4.nome)
p4.mudarNota()

console.log("matri\tnomes\tnota")
console.log("---------------------")
console.log(p1.matricula + "\t" + p1.nome + "\t" + p1.nota)
console.log(p2.matricula + "\t" + p2.nome + "\t" + p2.nota)
console.log(p3.matricula + "\t" + p3.nome + "\t" + p3.nota)
console.log(p4.matricula + "\t" + p4.nome + "\t" + p4.nota)
console.log("---------------------")