const http = require('http');

var server = http.createServer(function(response,request){
    response.writeHead(200,{"Content-Type":"text/html"});
    if(request.url == "/"){
        response.write("<h1>pagina Principal</h1>");
    }
    else if(request.url == "/bemVindo"){
        response.write("<h1>Bem vindo : </h1>");
    }
    else{
        response.write("<h1>pagina não encontrada</h1>")
    }

    response.end();
});

const port = 8080
server.listen(port, () =>{
    console.log(`rodando servidor em http://localhost:${port}`);
})