var Express = require('express');

// configure the server
const Server = Express();
const Port = 3000;

var routeOptions = {
	root: __dirname,
	dotfiles: 'allow',
	headers: {
		root: __dirname,
		'x-timestamp': Date.now(),
		'x-sent': true
	}
};

// include all files in directory
Server.use(Express.static(__dirname));

// set route for home page
fileName = 'index.html';
Server.get('*', function(request, response) {
	response.sendFile(fileName, routeOptions, function(err) {
		if (err) {
			console.log("failed loading home page.\n" + err);
			response.status(err.status).end();
		}
		else {
			console.log('Sent: ', fileName)
		}
	});
});

// create server to listen for calls to the port
Server.listen(Port, function(err) {
	if (err) {
		console.log("ERROR: " + err);
	}

	console.log("Web server is listening on port " + Port);
});