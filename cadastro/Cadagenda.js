const mongoose = require('mongoose')

// conectar ao servidor
mongoose.connect("mongodb://127.0.0.1:27017/agenda",
{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    serverSelectionTimeoutMS : 20000
})

// promise de conectar
const db = mongoose.connection

db.on('error', console.error.bind("erro :"))

db.once('open', ()=>{
    console.log('conectado ao banco!!!')
})
//criar a schema

const contatosSchema = mongoose.Schema({
numero : Number,
nome : String,
idade : Number,
email : String
})

const contatos = mongoose.model("contatos", contatosSchema);

// adicionar as pessoas no banco
const Epaminondas = new contatos({
    numero:1 ,
    nome: "Ephaminondas",
    idade: 17,
    email : "epa@gmail.com"
})

Epaminondas.save()

const Carla = new contatos({
    numero:2 ,
    nome: "Carla",
    idade: 18,
    email : "carla@gmail.com"
})

Carla.save()