var http= require("http");


function start() {
	function onRequest(request, response) {
		// body...
		console.log("Response received.");
		response.writeHead(200, {"Content-type": "text/plain"});
		response.write("<h1>Hello, Node.js!</h1>");
		response.end();
	}

	http.createServer(onRequest).listen(8888);

	console.log("Server has started");	
}

exports.start = start;
