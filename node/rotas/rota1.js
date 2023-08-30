const http = require('http')
const server = http.createServer(function(request,response){
    response.writeHead(200, {"Content-Type" : "text/html"});
    if(request.url == "/"){
        response.write("<h1>pagina principal ou raiz</h1>")
    }
    else if(request.url == "/bemvindo"){
        response.write("<h1>seje Bem vinde</h1>")  
    }
    else{
        response.write("a pagina que voce esta procurando non existe")
    }
    response.end()
})

const port = 3000;
server.listen(port, () =>{
    console.log(`servidor rodando na porta ${port}`)
})