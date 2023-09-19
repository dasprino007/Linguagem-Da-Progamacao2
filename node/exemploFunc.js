function escreverNoconsole(){
    console.log("escrevendo na tela, LOL")
}

//exec funcs
escreverNoconsole()

const  textoNoConsole = function(){
console.log("escrevendo na tela de novo, UWU!!!!")
}

textoNoConsole();

const textoNoParametro = function(texto){
    console.log(texto)
}

textoNoParametro("escrevendo mais uma vez, OWO!!!!")

const textoUsandoArrow = texto => {
    console.log(texto)
}

textoUsandoArrow("escrevendo de novo, lmao!!!!!!")

const ParOuImpar = num =>{
    if(num < 0){
        console.log(num,"é um numero é negativo")
    }
    else if(num == 0){
        console.log(num,"é um numero neutro")
    }
    else if(num % 2 == 0){
        console.log(num,"é um numero par")
    }
    else if(num % 2 != 0){
        console.log(num,"é um numero impar")
    }
}

ParOuImpar(-5);