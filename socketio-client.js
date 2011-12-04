var io = require( 'socket.io-client' );
var socket = io.connect('http://localhost:8030');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
	chunk = chunk.replace( '\n', '' );
	var args = chunk.split( ' ' );
	var jsargs = { note: args[1], vel: args[2] };
	console.log( jsargs );
	
	// ignore note offs and my malfunctioning nanopad
	if( jsargs.note != "26" && args[0] != "80"  ) {
		socket.emit('play', jsargs );
	}
});

socket.send('hi there');
