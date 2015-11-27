var net = require('net')

var server = net.createServer(function (socket) {
	console.log('A client has connected!');
	socket.on('data', function (data) {
	socket.write(data);
	});
});

server.listen(9000);
