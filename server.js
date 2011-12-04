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
	res.send( 200 );
});

function wail() {
	console.log('wailing');
	sdlmixer.play('static/wavs/ZENIT_DUB_SIREN_02.wav');	
}

app.listen(process.env.NODE_ENV === 'production' ? 80 : 3003, function() {
  // if run as root, downgrade to the owner of this file
  if (process.getuid() === 0)
    require('fs').stat(__filename, function(err, stats) {
      if (err) return console.log(err)
      process.setuid(stats.uid);
    });
});
