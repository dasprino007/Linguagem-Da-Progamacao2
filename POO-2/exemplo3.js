class pessoa {
    constructor(cpf,nome,anoNascimento){
        this.cpf = cpf;
        this.nome = nome;
        this.anoNascimento = anoNascimento;
    }

    mostraIdade(){
        console.log("idade é",2023 - this.anoNascimento);
    }
}


class cliente extends pessoa{
    constructor(cpf,id){
     super(cpf)
     this.id = id
    }
    
    mostraNome(){
        console.log("o nome é", this.nome)
    }
}

// progama principal
let cliente1 = new pessoa("327.033.647-09","Marcos",1974);
console.log(cliente1);
console.log(cliente1.nome);
cliente1.mostraIdade();

let cliente2 = new cliente("111.222.33-44",1)
cliente2.anoNascimento = 2000
cliente2.nome = "Luis"

console.log(cliente2)
cliente2.mostraIdade()
console.log(cliente1.cpf)
cliente2
.mostraIdade()
cliente2.mostraNome()