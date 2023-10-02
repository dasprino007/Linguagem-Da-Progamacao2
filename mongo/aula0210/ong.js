const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/ong",{
    useNewUrlParser : true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS : 20000
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, "falha na conexão!!!"))

db.once('open', () => {
    console.log("conexão feita")
})

//schema

const OngUsers = new mongoose.Schema({
    email: String,
    senha: String,
})

