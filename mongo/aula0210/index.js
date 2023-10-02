const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/escola",{
    useNewUrlParser : true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS : 20000
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, "falha na conexão!!!"))

db.once('open', () => {
    console.log("conexão feita lol!!!!")
})

//2 - criando o schema

const alunoSchema = new mongoose.Schema({
    nome  : String,
    idade : Number,
    turma : String
})

// 3 - modelagem ou model(o nome collection no mongodb)
const Alunos = mongoose.model('Alunos',alunoSchema)
// 4 - cadastrando varios com o insert many
Alunos.insertMany([
        {nome : 'Paulo', idade : 16, turma : 'turma1'},
        {nome : 'Maria', idade : 15, turma : 'turma2'},
        {nome : 'Marcos', idade : 17, turma : 'turma1'},
])

async function findAlunos(){
    try {
        const alunos = await Alunos.find({})
        console.log('alunos :', alunos)
    }
    catch{
        console.error('Alunos não encontrados : ',error)
    }
}

findAlunos()

Alunos.deleteMany([
    {nome : 'Paulo', idade : 16, turma : 'turma1'},
    {nome : 'Maria', idade : 15, turma : 'turma2'},
    {nome : 'Marcos', idade : 17, turma : 'turma1'},
])