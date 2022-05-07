// Set up following tutorial on https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module

const http = require("http");
const fs = require("fs").promises;

const host = "localhost";
const port = 8000;

let htmlFile;
let cssFile;

const requestListener = function (req, res) {
    switch (req.url) {
    case "/home/home.css":
        res.setHeader("Content-Type", "text/css");
        res.writeHead(200);
        res.write(cssFile);
        break;
    default:
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.write(htmlFile);
        
    }
    res.end();
    
};

fs.readFile("src/home/home.html").then(contents => {
    htmlFile = contents;
});

fs.readFile("src/home/home.css").then(contents => {
    cssFile = contents;
});


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    // console.log(`Server is running on http://${host}:${port}`);
});