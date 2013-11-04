var fs = require('fs');
var http = require('http');
var lame = require('lame');
var Speaker = require('speaker');
var path = require("path");  
var url = require("url");  

http.createServer(function(req, res){
	var my_path = url.parse(req.url).pathname;
	var $stream;
	if (my_path == '/stop') {
		$stream.close();
	}else{
		var fileName = './mp3'+my_path+'.mp3';
		$stream = fs.createReadStream(fileName)
		  .pipe(new lame.Decoder())
		  .on('format', function (format) {
		    this.pipe(new Speaker(format));
		  });
	};

}).listen(8888);



