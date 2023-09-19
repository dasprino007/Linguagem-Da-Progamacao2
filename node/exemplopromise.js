function FalarDepoisDe(segundos,frase){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(frase)
        }, segundos * 1000)
    })
}

FalarDepoisDe(3,"otima pergunta")
.then(frase => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase)) // recebe a frase concatiada da outra promise

function escreverLinha(tamanho = 80){
    
}