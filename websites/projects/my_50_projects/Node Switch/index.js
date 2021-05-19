const http = require ('http');

let server = http.createServer ((req, res) => {

switch (req.url) {
     
    case '/':
        res.StatusCode = 200;
        res.setHeader = ('Content-Type', 'text/html');
        res.end ('<h1>Olá</h1>');
        break;

    case '/users':
        res.StatusCode = 200;
        res.setHeader = ('Content-Type', 'application/json');
        res.end(JSON.stringify({
            users: [{
                name: "Mauricio",
                email: "mauricio@email.com",
                id:5
            }]
            }));
    break;
    
 }

 console.log("URL:", req.url)
 console.log("METHOD:", req.url)
 res.end ("OK");

});

server.listen(5000, "127.0.0.1", () =>{
 console.log("Server On");
})