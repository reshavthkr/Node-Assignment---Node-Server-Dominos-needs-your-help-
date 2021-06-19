var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if (req.url === "/welcome"){
        res.setHeader("Content-Type", "text/plain");
        res.writeHead(200);
        res.end("Welcome to Dominos!");
    }
    if (req.url === "/contact"){
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(`{
        "phone":"18602100000",
        "email": "guestcaredominos@jublfood.com"}`);
    }
    else{
        res.statusCode = 404;
        res.end();
    }
}
httpServer.listen(8081);
console.log("Listening to port 8081.....");
module.exports = httpServer;