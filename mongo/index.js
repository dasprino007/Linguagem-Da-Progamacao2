const mongoose  =  require('mongoose')

mongoose.connect('mongodb://localhost:27017/exemplo', 
{UserNewUrlParser : true, useUnifiedTopology: true, serverSelectionTimeoutMS : 10000})

const db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'))

db.once('open', function(){
    console.log("estamos logado no mongo db")
})