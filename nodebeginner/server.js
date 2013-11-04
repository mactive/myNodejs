var http = require("http");
var url = require("url"); 

function start(route) {
	function onRequest(request, response) {
		// body...
		var pathname = url.parse(request.url).pathname;
		
		console.log("Response " + pathname + " received.");
		route(pathname);

		response.writeHead(200, {"Content-type": "text/plain"});
		response.write("<h1>Hello, Node.js!</h1>");
		response.end();
	}

	http.createServer(onRequest).listen(8888);

	console.log("Server has started");	
}

exports.start = start;
