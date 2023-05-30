class produto{
    constructor(id,descrição,ativo,estoque,preco,marca,material,tamanho){
        this.id = id
        this.descrição = descrição
        this.ativo = ativo
        this.estoque = estoque
        this.preco = preco
        this.marca = marca
        this.material = material
        this.tamanho = tamanho
    }

    ativar(){
        this.ativo = true
    }
    
    retirarEstoque(valor){
        if (this.ativo) {
            if(valor < 0){
                console.log("não pode valor negativo")
            }
            else if(valor > this.estoque){
                console.log("esta acima do que o estoque pode vender")
            }
            else if (0 == valor) {
                console.log("impossivel realizar, valor zerado...");
            }
            else if(valor <= this.estoque){
                this.estoque -= valor
            }
        }
        else{
            console.log("produto desativado")
        }
    }

    incluirEstoque(valor){
        if (this.ativo) {
            if(valor < 0){
                console.log("não pode valor negativo")
            }
            else if (0 == valor) {
                console.log("impossivel realizar, valor zerado...");
            }
            else{
                this.estoque += valor
            }
        }
        else{
            console.log("produto desativado")
        }
    }
}

const leia = require("prompt-sync")();
let sair = parseInt(1)
let venda = 0
let produtos = 0

console.log("C&E")
console.log("alta qualidade e baixos preços")
console.log("deseja continuar S/N")
resp = leia("coloque a resposta:")
if(resp == "S"){
    console.log("ok")
}
else if(resp == "N"){
 sair = 2
 console.log("okay tchau")
}

while(2 != sair){
    let descricao = leia("coloque uma descrição :")
    let preco = parseFloat(leia("coloque o preço :"))
    let marca = leia("coloque a marca :")
    let material = leia("coloque um material :")
    let tamanho = leia("coloque um tamanho :")
    let P1 = new produto(1,descricao,false,10,preco,marca,material,tamanho)
    P1.ativar()
    console.log("vc cadastrou um produto!!!!!!!!")
    produtos++
    for(i = 0; i < 10; i++){
        console.log("produtos:",produtos)
        console.log("vendas:",venda)
        console.log("descrição",P1.descrição)
        
        let valor = parseInt(leia("quantos produtos vc quer comprar :"))
        P1.retirarEstoque(valor)
        console.log("total a pagar",P1.preco*valor)
        venda =+ valor
        console.log("--------------------------------------------------------------")
    }
    console.log("produtos:",produtos)
    console.log("descrição",P1.descrição)

    valor = parseInt(leia("quantos produtos vc quer comprar do estoque :"))
    P1.incluirEstoque(valor)

    console.log("estoque atual é",P1.estoque)


}