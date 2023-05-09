// criação da classe
class animal {
    constructor(especie,peso,porte,anoNascimento){
        this.especie = especie;
        this.peso = peso;
        this.porte = porte;
        this.anoNascimento = anoNascimento;
    }
    // so fuciona se o objeto existir
    fazBarulho(){
        console.log("arrrrrrrrrrrrrrrrrg")
    }

    voltaIdade(anoAtual){
        return (anoAtual - this.anoNascimento);
    }
}

// subclasse
class gato extends animal{
    constructor(especie,cor,raca){
        super(especie)
        this.cor = cor;
        this.raca = raca;
    }
    miar(){
        console.log("miaaau..................")
    }
}

// progama principal
// objeto
let bicho1 = new animal("tigre",70,"grande",2000)
let bicho2 = new animal("galinha",2,"pequeno",2022)
let bicho3 = new gato("felino","preto","persa")

console.log(bicho1.especie)
bicho1.fazBarulho()

let idade = bicho2.voltaIdade(2023)
console.log(idade)

// herdou da classe
bicho3.miar()
bicho3.anoNascimento = 2020
console.log(bicho3.voltaIdade(2023))