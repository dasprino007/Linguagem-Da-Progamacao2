// o usuario vai digitar numeros
// 1- mostrar o somatorio deste numeros
// 2- mostrar qual foi o maior numero digitado
// 3-o progama para de solicitar numeros quando o numero for negativo
// a soma dos numeros não deve considerar o numero negativo

const leia = require("prompt-sync")();

//variaveis
var num = 0
var soma = 0
var maiorNum = 0
var cont = -1

do{
    soma += num
    if(num > maiorNum){
        maiorNum = num 
    }
    cont++
    num = parseInt(leia("coloque um numero :"));
}while(num > 0)

console.log("a soma dos numeros é de",soma);
console.log("o maior numero é",maiorNum);
console.log("qnt:",cont)