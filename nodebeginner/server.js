var http= require("http");

var server = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-type": "text/plain"});
	response.write("<h1>Hello, Node.js!</h1>");
	response.end();
});

server.listen(8888);