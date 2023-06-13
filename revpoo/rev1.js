const leia = require("prompt-sync")();
var resp = parseInt(leia("coloque um numero entre 5 e 9 :"))

if(resp >= 5 && resp <= 9){
    console.log(resp)
        while(100 > resp){
            resp = resp * 3
            console.log(resp)
        }
}
else{
    console.log("numero errado, coloque um numero entre 5 e 9")
}