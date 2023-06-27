const leia = require("prompt-sync")();

let codigo = ["GRP0X-01","GRP0X-02","GRP0X-03","GRP0X-04","GRP0X-05","GRP0X-06","GRP0X-07","GRP0X-08","GRP0X-09","GRP0X-10"];
let produto = ["BONÉ","CALÇA","BERMUDA AFRO","BATA","CAMISA AFRO","SAIA RODADA","SAIA STYLE","MACACÃO","CAMISETA TEMATICA","CALÇA SOCIAL AFRO"];
let valor = [100.00,150.00,90.00,140.00,150.00,90.00,90.00,150.00,100.00,95.50];
let estoque = [10,10,10,10,10,10,10,10,10,10];
let carinho = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// variaveis
let x = 0;
let loja = "Loja Transatlântica";
let slogan = "Atravessamos o que for para entregar a melhor \n qualidade até você!";
let i = 0;
let o = 0;
let op = 0;


while(x < 1){
    console.log(loja)
    console.log(slogan)
    let pergunta = leia("deseja continuar S/N :")
    if(pergunta == "N" || pergunta == "n"){// se não
        console.log("tenha um bom dia");
        break;
    }
    console.log("codigo"+'\t'+"produto"+'\t'+"valor"+'\t'+"estoque")
    for(let i=0; i<codigo.length; i++){
            console.log(codigo[i]+'\t'+produto[i]+'\t'+valor[i]+'\t'+estoque[i]+'\t'+carinho[i])
    }
        console.log("carinho de compras")
        for(let i=0; i<codigo.length; i++){
            if(carinho[i] != null && carinho[i] > 0){
                console.log(codigo[i]+'\t'+produto[i]+'\t'+valor[i]+'\t'+estoque[i]+'\t'+carinho[i])
            }
        }
        let cod = leia("coloque o codigo do produto :")
        for(let i=0; i<codigo.length; i++){
            if(cod == codigo[i]){
                console.log(codigo[i]+'\t'+produto[i]+'\t'+valor[i]+'\t'+estoque[i]+'\t'+carinho[i])
                cod = i
            }
        }
        
        while(i < 1){
            carinho[cod] = leia("coloque quanto vc quer? :")
            if(estoque[cod] >= carinho[cod] && carinho[cod] > 0){
                estoque[cod] = estoque[i] - carinho[cod]
                i++
            }
            else{
            console.log("numero errado")   
            }
    }
    // joão continua ea
        pergunta = leia("deseja continuar S/N :")
        if(pergunta == "N" || pergunta == "n"){// se não
            console.log("tenha um bom dia");
            break;
        }
        else{
            console.log("\n\n\n")
        }
    }


//carinho de compra
// a tabelas não tao fucionando se tiver alguma duvida me fala ok
// Programa Nota Fiscal

console.log(loja);
console.log("Imposto arrecadado: " + imposto);
console.log("Opcoes de pagamento: \n  1 para A VISTA (-10%) '\t' 2 para CARTAO (+10%) '\t' 3 para parcelar em 2 vezes (+15%)");

do{
    op++;
    if (op == 1) {
    console.log("Selecionado: A vista");
    total -= 0.1*(total);
} 

    else if (op == 2){
    console.log("Selecionado: Com cartao")
    total += 0.1*(total);
    }

}

while(op == 1 || op == 2 || op == 3)*/