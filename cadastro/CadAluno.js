const mongoose = require('mongoose')

// criar a chave de conexão
mongoose.connect('mongodb://127.0.0.1:27017/escola',
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        serverSelectionTimeoutMS : 20000
    }

)

//executando a conexão

const db = mongoose.connection

// codigo de teste da conexão
db.on("error", console.error.bind("connection error :")); // erro na conecção com o banco de dados

db.once('open', function(){
    console.log(`Conectado ao Banco`)
})

//segunda fase - usando o banco
//1 - criando um Schema

const alunoSchema = new mongoose.Schema({
    matricula : String,
    nome: String,
    idade: Number,
    turma : String
})

//2 - criando a model
const Alunos = mongoose.model('alunos',alunoSchema)

// colocar dados dentro desta collection

const Carlos = new Alunos({
    matricula: 'rm7895',
    nome : 'Carlos silva',
    idade : 18,
    turma : '2MIB'
})

Carlos.save()

const Maria = new Alunos({
    matricula: 'rm7896',
    nome : 'Maria da silva',
    idade : 17,
    turma : '2MIB'
});

Maria.save();