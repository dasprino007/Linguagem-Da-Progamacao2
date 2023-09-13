function falarDepoisDe(segundos,frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(frase)
        }, segundos * 1000)
    })
}

//chamada da função

falarDepoisDe(4,"teste de promises no 2 mib")
.then(frase => frase.concat(" lol"))
.then(novaFrase => console.log(novaFrase))
