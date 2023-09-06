const mongoose  =  require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/exemplo',
{useNewUrlParser : true, useUnifiedTopology: true, serverSelectionTimeoutMS : 10000});

const db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));

db.once('open', function(){
    console.log("estamos logado no mongodb");
});

const pessoaSchema = new mongoose.Schema({
    nome : String,
    idade : Number,
    profissão : String
});

const pessoa = mongoose.model("Pessoa", pessoaSchema);

const marcos = new pessoa({
    nome : "marcos",
    idade : 25,
    profissão : "programador"
})

console.log(marcos.nome)
console.log(marcos.idade)
console.log(marcos.profissão)

marcos.save();