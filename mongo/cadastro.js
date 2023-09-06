const mongoose  =  require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/livros',
{useNewUrlParser : true, useUnifiedTopology: true, serverSelectionTimeoutMS : 10000});

const db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));

db.once('open', function(){
    console.log("estamos logado no mongodb");
});

const livrosSchema = new mongoose.Schema({ // constructor
    descrição : String,
    ano : Number,
    valor: Number,
    estoque : Number
});

const livros = mongoose.model("compras", livrosSchema) // classe

const hobbit = new livros({ // objeto
    descrição : "Como a maioria dos hobbits, Bilbo Bolseiro leva uma vida tranquila até o dia em que recebe uma missão do mago Gandalf. Acompanhado por um grupo de anões, ele parte numa jornada até a Montanha Solitária para libertar o Reino de Erebor do dragão Smaug.",
    ano : 1937,
    valor: 35,
    estoque : 42
})

const guerrasDosMundos = new livros({ // objeto
    descrição : "Com tripés biomecânicos gigantes, querem conquistar a Terra e manter os humanos como escravos. Nenhuma tecnologia terrestre parece ser capaz de conter a expansão do terror pelo planeta. É o começo da guerra mais importante da história. Como a humanidade poderá resistir à investida de um potencial bélico tão superior?",
    ano : 1898,
    valor : 14,
    estoque: 500
})

hobbit.save(); // salvar objeto
guerrasDosMundos.save(); // salvar objeto

console.log(hobbit.ano)
console.log(guerrasDosMundos.ano)