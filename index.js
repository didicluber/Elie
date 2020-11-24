//1.
var http = require('http');
var fs = require('fs');
//2.
var server = http.createServer(function (req, resp) {
    //3.
    if (req.url === "/") {
        fs.readFile("index.html", function (erreur, pgResp) {
            if (erreur) {
                resp.writeHead(404);
                resp.write('contenu non trouver');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }

            resp.end();
        });
    } else {
        //4.
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.end();
    }
});
//5.
server.listen(5050);

console.log('Server Started listening on 5050');