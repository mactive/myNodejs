var Player = require('player');
var fs = require('fs');
var http = require('http');
var path = require("path");  
var url = require("url");  

http.createServer(function(req, res){
	var my_path = url.parse(req.url).pathname;
	// create player instance
	var player;
	// stop playing
	var $stream;
	if (my_path == '/stop') {
		console.log(player);
		player.stop();
	}else{
		var fileName = './mp3'+my_path+'.mp3';
		// player = Player.play(fileName,function(){
		//     console.log('done!')
		// });

		player = Player.play([
			fileName
		],function(player){
		    // play done
		    console.log(player)
		    console.log('done!!!')
		});
	};

}).listen(8888);



