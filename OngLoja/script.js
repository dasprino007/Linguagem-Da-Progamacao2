const leia = require("prompt-sync")()

let codigo = ["COD1","COD2","COD3"]
let servico = ["traduzir filme","traduzir livro","traduzir serie"]
let VALORUNITARIODOACAO = [10.00,24.99,11.99]
let movimento = [0,0,0]
let loop = 0
let resp
let condicao
let pergunta
let total = 0

while(loop < 1){
    pergunta = leia("deseja continuar? :")
    if(pergunta == "sim"){
        console.log("codigo\tserviço\t\tvalor\tcarinho")
        for(i = 0; i < codigo.length; i++){
            console.log(codigo[i]+"\t"+servico[i]+"\t"+VALORUNITARIODOACAO[i]+"\t"+movimento[i])
        }

        console.log("1-adicionar\n2-renomear\n3-deletar\n4-ler\n5-comprar\n6-sair")
        condicao = leia("escolha umas das opçoes")
        switch(condicao){
        case "1" :
            console.log("adicionar")
            resp = leia("coloque o codigo :").toUpperCase()
            codigo.push(resp)
            resp = leia("coloque o nome do produto :")
            servico.push(resp)
            resp = leia("coloque o preço ou valor :")
            VALORUNITARIODOACAO.push(resp)
            movimento.push(0)
            console.log("produto adicionado!!!")
            console.log("codigo\tserviço\t\tvalor\tcarinho")
            for(i = 0; i < codigo.length; i++){
                console.log(codigo[i]+"\t"+servico[i]+"\t"+VALORUNITARIODOACAO[i]+"\t"+movimento[i])
            }
        break;
        case "2" :
            console.log("renomear produto")
                resp = leia("coloque o codigo do item para renomear :").toUpperCase()
                console.log(resp)
                
                for(i = 0; i < codigo.length; i++){
                    console.log(codigo[i])
                    if(codigo[i] == resp){
                        let nome
                        nome = leia("coloque o codigo :").toUpperCase()
                        codigo[i] = nome
                        nome = leia("coloque o nome do produto :")
                        servico[i] = nome
                        nome = leia("coloque o preço ou valor :")
                        VALORUNITARIODOACAO[i] = nome
                        console.log("produto adicionado!!!")
                    }
                }
        break;
        case "3" :
            console.log("deletar produto")
                resp = leia("coloque o codigo do item para deletar :").toUpperCase()
                console.log(resp)
                
                for(i = 0; i < codigo.length; i++){
                    console.log(codigo[i])
                    if(codigo[i] == resp){
                        codigo.slice(0,resp)
                        servico.slice(0,resp)
                        VALORUNITARIODOACAO.slice(0,resp)
                    }
                }
        break;
        case "5":
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
        break;
        }        
    }
    else{
        loop ++
        console.log("muito obrigado")
    }
}