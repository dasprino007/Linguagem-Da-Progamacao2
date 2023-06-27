const leia = require("prompt-sync")();

let codigo = ["GRP0X-01","GRP0X-02","GRP0X-03","GRP0X-04","GRP0X-05","GRP0X-06","GRP0X-07","GRP0X-08","GRP0X-09","GRP0X-10"];
let produto = ["BONÉ","CALÇA","BERMUDA AFRO","BATA","CAMISA AFRO","SAIA RODADA","SAIA STYLE","MACACÃO","CAMISETA TEMATICA","CALÇA SOCIAL AFRO"];
let valor = [100.00,150.00,90.00,140.00,150.00,90.00,90.00,150.00,100.00,95.50];
let estoque = [10,10,10,10,10,10,10,10,10,10];
let carinho = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// variaveis
let x = 0;
let loja = "Loja Transatlântica";
let slogan = "Atravessamos o que for para entregar a melhor qualidade até você!";
let i = 0;
let o = 0;
let op = 0;
let total = 0;

    console.log(loja)
    console.log(slogan)
    let pergunta = leia("Deseja Comprar S/N :");

    if(pergunta == "N" || pergunta == "n"){
        console.log("Tenha um bom dia");
    }

    else{
    console.log("codigo"+'\t'+"produto"+'\t'+"valor"+'\t'+"estoque")
    for(let i=0; i<codigo.length; i++){
            console.log(codigo[i]+'\t'+produto[i]+'\t'+valor[i]+'\t'+estoque[i]+'\t'+carinho[i])
    }
        console.log("Carrinho de compras")
        for(let i=0; i<codigo.length; i++){
            if(carinho[i] != null && carinho[i] > 0){
                console.log(codigo[i]+'\t'+produto[i]+'\t'+valor[i]+'\t'+estoque[i]+'\t'+carinho[i])
            }
        }
        let cod = leia("Coloque o código do produto :")
        for(let i=0; i<codigo.length; i++){
            if(cod == codigo[i]){
                console.log(codigo[i]+'\t'+produto[i]+'\t'+valor[i]+'\t'+estoque[i]+'\t'+carinho[i])
                cod = i
            }
        }
        
        while(i < 1){
            carinho[cod] = leia("Coloque a quantidade requerida :")
            if(estoque[cod] >= carinho[cod] && carinho[cod] > 0){
                estoque[cod] = estoque[i] - carinho[cod]
                i++
            }
            else{
            console.log("Selecione apenas uma quantidade")   
            }
    }
    // joão continua ea
        pergunta = leia("deseja continuar S/N :")
        if(pergunta == "N" || pergunta == "n"){// se não
            console.log("tenha um bom dia");
        }
        else{
                    // Nota Fiscal - Última etapa
        console.log(loja);
        let imposto = 0.9 * total;
        console.log("Imposto arrecadado: " + imposto);
        console.log("Opcoes de pagamento: \n  1 para A VISTA (-10%) '\t' 2 para CARTAO (+10%) '\t' 3 para parcelar em 2 vezes (+15%)");
        op = parseInt(leia("Digite a opção desejada: " ));
        do{
            op++;
            if (op == 1) {
            console.log("Selecionado: A vista");
            total -= 0.1*(total);
        } 
            else if (op == 2){
            console.log("Selecionado: 1x no cartao");
            total += 0.1*(total);
            }

            else if (op == 3){
            console.log("Selecionado: 2x no cartao")
            total += 0.15*(total);
            }
        }

        while(op == 1 || op == 2 || op == 3);
        console.log("Nota Fiscal");
        console.log("COD \t PRODUTO \t VALOR \t QTD");
        console.log(codigo[i] + produto[i] + valor[i] + (estoque[i] - carinho[codigo]));
        console.log(" \n Obrigado, volte sempre!")
            }
    }
        // Carrinho de compra

// A tabelas não tão funcionando se tiver alguma dúvida me fala ok