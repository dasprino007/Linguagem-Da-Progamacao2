const leia = require("prompt-sync")();

let mat = ["m01","m02","m03"]
let nomes = ["Marcos","Pedro","Maria"]
let notas = [5,6,8]
let situacao

console.log("matri\tnomes\tnotas\tsituacao")
for(i = 0; i < mat.length; i++ ){
    if(notas[i] <= 5){
        situacao = "rec"
    }

    else{
        situacao ="aprovado"
    }

console.log(mat[i] + "\t" + nomes[i] + "\t" + notas[i] + "\t" + situacao)
}
