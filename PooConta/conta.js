class conta{
    constructor(numero,saldo,ativa){
        this.numero = numero
        this.saldo = saldo
        this.ativa = ativa
    }
    credito(valor) {
        this.saldo = this.saldo + valor    
    }

    debito(valor) {
        if(valor < 0){
            console.log("impossivel fazer, numero negativo ...")
        }

        else if(valor > this.saldo){
            console.log("impossivel fazer, saldo indisponivel ...")
        }
        else {
            this.saldo = this.saldo - valor
        }
        
    }
}

//progama principal

let conta1 = new conta(15,0,true)

console.log("saldo atual da conta : ", conta1.saldo)
conta1.credito(100)
console.log("saldo atual da conta : ", conta1.saldo)
conta1.debito(50)
console.log("saldo atual da conta : ", conta1.saldo)