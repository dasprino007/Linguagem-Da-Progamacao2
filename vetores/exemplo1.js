const leia = require("prompt-sync")()

//variaveis
let matricula = ["M01","M02","M03","M04"];
let nome = ["Marcos","Paulo","Pedro","Maria"];
let nota = [0,0,0,0];
let auxmat;

console.log("MATRICULA\tNOME\tNOTA");

for(let i = 0; i < matricula.length; i++ ){
    console.log(matricula[i]+"\t\t"+nome[i]+"\t"+nota[i])
}

auxmat = leia("coloca a matricula :").toUpperCase();
console.log(auxmat);

for(let i; i < matricula.length; i++){
if(matricula[i] == auxmat){
    matricula[i] = leia("coloque a nota")
}

}



