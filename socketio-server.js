var express = require('express');
var app = express.createServer();
var io = require('socket.io').listen(app);
var sdlmixer = require('sdlmixer');

app.use(express.static(__dirname + '/static'));

io.sockets.on('connection', function (socket) {
  socket.on('play', function (data) {
	console.log( "playing" );
    console.log(data);
	play_drum( data.note );
  });
});

/*
app.get('/play', function( req, res ) {
	var note = req.query.note;
	var vel = req.query.vel;
	console.log( "note: " + note + " vel: " + vel );
	play_drum( note );
	res.send( 200 );
});
*/

function play_drum( note ) {
	switch( note ) {
	case "24":
		sdlmixer.play('static/wavs/hiphop/kick.wav');	
		break;
	case "28":
		sdlmixer.play('static/wavs/hiphop/snare.wav');	
		break;
	case "2B":
		sdlmixer.play('static/wavs/hiphop/hh-open.wav');	
		break;
	case "3B":
		sdlmixer.play('static/wavs/hiphop/hh-closed.wav');	
		break;
	default:
		console.log( "unsupported note" );
	}
}

app.listen(8000);
