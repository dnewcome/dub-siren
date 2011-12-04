var express = require('express'),
    sdlmixer = require('sdlmixer'),
    app = express.createServer();

app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.static( __dirname + '/static' ));
});


app.get('/', function(req, res){
    res.redirect( '/siren.html' );
});
app.get('/index.html', function(req, res){
    res.redirect( '/siren.html' );
});

app.post('/wail', function( req, res ) {
	wail();
	res.redirect( '/' );
});
app.get('/wail', function( req, res ) {
	wail();
	res.send( 'wailing' );
});

app.get('/play', function( req, res ) {
	var note = req.query.note;
	var vel = req.query.vel;
	console.log( "note: " + note + " vel: " + vel );
	play_drum( note );
	res.send( 200 );
});

function wail() {
	console.log('wailing');
	sdlmixer.play('static/wavs/ZENIT_DUB_SIREN_02.wav');	
}

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

app.listen(process.env.NODE_ENV === 'production' ? 80 : 3003, function() {
  // if run as root, downgrade to the owner of this file
  if (process.getuid() === 0)
    require('fs').stat(__filename, function(err, stats) {
      if (err) return console.log(err)
      process.setuid(stats.uid);
    });
});
