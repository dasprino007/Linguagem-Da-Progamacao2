function nomeComIdade(nome, idade){
    if(idade === undefined){
        console.log("seu nome é "+nome)
    }
    else{
        console.log(`O seu nome é ${nome}, e você tem ${idade}`)
    }
}

//nomeComIdade("epaminondas")
//nomeComIdade("carla",15)
nomeComIdade(18, "ed", 2500)

function repetirFrase(frase, number = 5){
    for(let x=1; x<=number; x++){
        console.log(frase + " " + x)
    }
}

repetirFrase("cuidado este assunto é importante", 9)