// "Import" the relevant modules. HTTP and Express to serve Websites.
var express = require('express');
var app = express();
var http = require('http').Server(app);

// Choose which port to send out the HTML on. Websites normally use 80.
var port = 3000;

// Now our Server will send the Websites code to any browser that asks for it.
app.use(express.static('Website'));

// Start listening for connections on our chosen port.
http.listen(port, function(){
	// Print out some status information.
	console.log('listening on port '+port);
});
