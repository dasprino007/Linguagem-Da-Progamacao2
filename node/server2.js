const {createServer} = require('http')

let server = createServer((request,response) => {
    response.writeHead(200,{"Content-Type":"text/html"}); // tipo
    response.write(`<h1>hello world 2</h1> 
                    <p>voce sabia que eu tenho um texto lindo</p>`);
    response.end()
})

const port = 8000
server.listen(port, () =>{
    console.log(`rodando servidor em http://localhost:${port}/`);
})