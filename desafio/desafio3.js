const leia = require("prompt-sync")()

let numero = parseInt(leia("Digite um numero inteito :"))
let total = 0

for(let x=1; x <= numero; x++ ){
    if((x%2) == 1){
        console.log(x)
        total += x
    }
}
console.log("total :",total)