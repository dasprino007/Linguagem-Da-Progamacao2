//Classes
class conta{
    constructor(numero,cpf,saldo,ativo){
        this.numero = numero; // int
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativo = ativo;
    }
    ativar(){
        this.ativo = true
    }

    credito(valor){
        if(valor < 0){
            console.log("não pode valor negativo")
        }

        else if(valor > 0){
        if(this.ativo){
            this.saldo += valor    
        }

        else{
            console.log("conta inativa...")
        }
    }
    }

    debito(valor){
        if(this.ativo){
            if(valor < 0){
                console.log("impossivel realizar, valor negativo...")
            }
            else if( 0 == valor){
                console.log("impossivel realizar, valor zerado...")
            }

            else if (valor > this.saldo){
                console.log("voce não pode pagar")
            }

            else{
                this.saldo -= valor
            }
        }

    else{ 
        console.log("conta inativa...")
    }
    }
}

class Empresa extends conta{
    constructor(numero,cpf,saldo,ativo,emprestimoEmpresa){
        super(numero,cpf, saldo, ativo);
        this.emprestimoEmpresa = emprestimoEmpresa;
    }
        pedirEmprestimo(valor){ //(soma no saldo e tira do empresitmo)
            if(valor < 0){
                console.log("o numero que voce esta colocando é negativo")
            }
            else if(valor > this.emprestimoEmpresa){
                console.log("voce ultrapasso o limite")
            }
            else if (valor <= this.emprestimoEmpresa){
                this.saldo += valor
                this.emprestimoEmpresa -= valor
            }
        }
}

class corrente extends conta {
    constructor(numero,cpf,saldo,ativo,talãoMax,talãoUsuario){
    super(numero,cpf, saldo, ativo);
    this.talãoMax = talãoMax
    this.talãoUsuario = talãoUsuario
    }
    talão(valor){
        if (this.talãoUsuario < this.talãoMax) {
            if(valor <= 30){
                this.saldo += valor
                this.talãoUsuario++
            }

            else if(valor>30){
                console.log("ultrapassou o limite do saldo de 30 reais")
            }
    
            else if(valor ==0){
            console.log("impossivel realizar o saldo")
            }
        }

        else{
            console.log("voce ja chegou no seu limite de 3 talões")
        }
    }
}

//progama principal
const leia = require('prompt-sync')()
let c1 = new conta (0,0,0,false)

console.log("badesco")
console.log("aonde as taxas são muitos baixas")
console.log("1-conta emprestismo \n2-conta corrente")
var escolher_conta = leia("coloque um dos numeros acimas")

 switch(escolher_conta){
 case 1:
    c1 = new Empresa(numero,cpf,0,false,10000)
 break;
 case 2 :
    c1 = new corrente (numero,cpf,0,false,30,0)
 break;
}

let numero = parseInt(leia("digite numero da conta: "))
let cpf = leia("digite o cpf da conta : ")
let op=""
c1.ativar()
c1.credito(100)
console.log("saldo atual",c1.saldo)

for(let i=1; i<=10; i++){
    op = leia("Digite D - debito ou C para credito : ")
    if(op == "D" || op == "d"){
        valor = parseInt(leia("digite o valor para debito : "))
        c1.debito(valor)
    }

    else if(op == "C" || op == "c"){
        valor = parseInt(leia("digite o valor para credito : "))
        c1.credito(valor)
    }
    console.log("saldo atual :",c1.saldo)
}

console.log("saldo final da conta",c1.saldo)

var x = 0

while(x < 1){
    escolher_conta = escolher_conta
    var alternativas = leia("coloque um dos numeros acimas")
    switch(escolher_conta){
        case 1:
            console.log("Saldo Atual: R$", c1.saldo , "emprestimo R$",c1.emprestimoEmpresa)
            switch(alternativas){
            case 1:
                valor = parseInt(leia("digite o valor para debito : "))
                c1.debito(valor)
            break;
            case 2:
                valor = parseInt(leia("digite o valor para credito : "))
                c1.credito(valor)
            break;
            case 3:
                valor = parseInt(leia("digite o valor do emprestimo : "))
                c1.pedirEmprestimo(valor)
            break;
            case 4:
            x++
            console.log("obrigado por sair")
            break;
            }
        break;
    }
}

// desculpa professor eu tentei mas eu não tive ideia de como fazer a UI