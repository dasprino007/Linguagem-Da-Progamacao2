let carro = {
    marca : "chevrolet",
    modelo : "onix",
    ano : 2018,   
    preco : 45000,
    motor : {
        cilindradas : 1.4,
        potencia : 100
    },
    acelerar: function(){
        console.log("acelerando...")
    }
};

console.log("tempo de fabricação:", (2023-carro.ano));

let pessoa = {
    nome : "joaquina",
    anonascimento : 1980,
    mostraIdade : function(){
        console.log("sua idade é", 2023 - this.anonascimento) // o this informa que este atributo esta dentro do proprio objeto
    }
};

// desafio

let transfomer = {
    nome : "starscream",
    altMode : "F-16",
    facção : "decepticon",
    status : "ia",
    patente : "segundo em comando",
    tamanho : "8 metros",
    continuidade : "G1"
};

let mobilesuit = {
    nome : "rx-78",
    status : "kia",
    facção : "federação da terra",
    tamanho : "18 metros",
    armas : {
        arma1 : "Beam Saber",
        arma2 : "Beam Javelin",
        arma3 : "BOWA*XBR-M-79-07G Beam Rifle",
        arma4 : "BLASH*XHB-L-03/N-STD Hyper Bazooka",
        arma5 : "RX*M-Sh-008/S-01025 Shield",
        arma6 : "Super Napalm",
        arma7 : "Gundam Hammer",
        arma8 : "Hyper Hammer"
    },
    continuidade : "UC"
};

carro.acelerar()

pessoa.mostraIdade()

// desafio 2

let avião = {
    ligado : false,
    tipo : "boinng",
    velocidadeMaxima: 200,
    velocidade : 0,
        altitude : 0,
    qtDePassageiros : 300,

    acelerando : function(){
        if(this.ligado && this.velocidade<=this.velocidadeMaxima){
          this.velocidade = this.velocidade + 10
        }
    },
    subindo : function(){
    if(this.ligado && this.velocidade == 200){
    this.altitude = this.altitude + 100
    }
    },
    descendo : function(){
        if(this.ligado && this.velocidade == 200 && this.altitude >= 0){
        this.altitude = this.altitude - 100
        }
        },
    desacelerando : function(){
        if(this.ligado && this.velocidade<=this.velocidadeMaxima){
          this.velocidade = this.velocidade - 10
        }
    },
    ligar : function(){
        this.ligado = true
        console.log("avião ligado ...")
    },
    desligar : function(){
        this.ligado = false
        console.log("avião desligado...")
    }
}

avião.ligar()

console.log("acelerando...")
for(let i=1; i <= 20; i++){
avião.acelerando()
console.log("velocidade atual:", avião.velocidade, "km/h")
}

console.log("subindo...")
for(let i=1; i <= 30; i++){
    avião.subindo()
    console.log("altitude atual:", avião.altitude, "metros")
    }

console.log("descendo...")
for(let i=1; i <= 30; i++){
    avião.descendo()
    console.log("altitude atual:", avião.altitude, "metros")
    }

console.log("pousado")
console.log("desacelerando...")
for(let i=1; i <= 20; i++){
    avião.desacelerando()
    console.log("velocidade atual:", avião.velocidade, "km/h")
    }
avião.desligar()