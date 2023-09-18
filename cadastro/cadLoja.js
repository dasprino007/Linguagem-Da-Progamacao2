const mongoose = require('mongoose')
const fs = require('fs')
const csv = require('csv-parser')

mongoose.connect('mongodb://127.0.0.1:27017/loja',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    serverSelectionTimeoutMS : 20000
})

// defini o esquema do nosso projeto vindo do csv

const produtoSchema = new mongoose.Schema({
    codigo : String,
    descricao : String ,
    valor : Number,
    estoque : String
})

const produtos = mongoose.model('produtos', produtoSchema)
//2- criar a model parti do Schema

function lerCsvSalvarNoMongo(){
    const resultado = [];

    fs.createReadStream('exemplo - Página1.csv')
    .pipe(csv()) //transfomrma em objeto
    .on('data',(dados)=>{
        resultado.push(dados)
    })
    .on('end', ()=>{
        produtos.insertMany(resultado)
        .then(()=>{
            console.log("Dados inseridos com sucesso")
            mongoose.connection.close()
        }).catch((error) => {
            console.error('erro importar dados',error)
            mongoose.connection.close()
        })
    })
}

lerCsvSalvarNoMongo()