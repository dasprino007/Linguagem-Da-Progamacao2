const http = require('http')

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','Text/Plain'); // requisição do node
    res.end('Hello, Node.JS Server'); // o que vai aparecer
})

// publicação da pagina no github pages
// e o servidor em oracle

const port = 3000;
server.listen(port , () =>{
    console.log(`servidor executando em http://localhost:${port}/`)
});



