const {error} = require('console')
let {writeFile,readFile} = require('fs')


readFile("arquivo.txt","utf-8",(error,texto) => {
    if(error){
        throw error;
    } else {
        console.log(texto)
    }
})

writeFile(`arquivo.txt`,"isso daqui é um texto lol", (error) =>{
    if(error){
        throw error;
    }
    else{
        console.log("\narquivo criado!!!!")
    }
})