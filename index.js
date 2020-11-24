//1. importation des modules
var http = require('http');
var fs = require('fs');
const port = 3000;
//2. Creation du serveur 
var server = http.createServer(function (req, resp) {
    //3. Ecriture de la page sur le navigateur
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
        //4.  on indiquee au navigateur que c'est du html
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.end();
    }
});
//5. ecoute du port 
server.listen(port);

console.log(`Serveur: localhost:${port}`)