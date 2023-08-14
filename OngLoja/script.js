const leia = require("prompt-sync")()

let codigo = ["COD1","COD2","COD3"]
let servico = ["traduzir filme","traduzir livro","traduzir serie"]
let VALORUNITARIODOACAO = [10.00,24.99,11.99]
let movimento = [0,0,0]
let loop = 0
let resp
let total = 0

while(loop < 1){
    console.log("codigo\tserviço\t\tvalor\tcarinho")
    for(i = 0; i < codigo.length; i++){
        console.log(codigo[i]+"\t"+servico[i]+"\t"+VALORUNITARIODOACAO[i]+"\t"+movimento[i])
    }
    
    for(volta = 0; volta < 10; volta++){
        resp = leia("coloque o codigo do item para comprar :").toUpperCase()
        console.log(resp)
        
        for(i = 0; i < codigo.length; i++){
            if(codigo[i] == resp){
                movimento[i] += 1
            }
        }
        
        console.log("codigo\tserviço\t\tvalor\tcarinho")
        for(i = 0; i < codigo.length; i++){
            console.log(codigo[i]+"\t"+servico[i]+"\t"+VALORUNITARIODOACAO[i]+"\t"+movimento[i])
        }
    }
    
    for(i = 0; i < codigo.length; i++){
        total += (movimento[i]*VALORUNITARIODOACAO[i])
    }
    
    console.log("o valor total é de R$"+total)
    movimento = [0,0,0]
    total = 0
    resp = leia("deseja sair? :")
    if(resp == "sim"){
       loop++
       console.log("muito obrigado") 
    }
}