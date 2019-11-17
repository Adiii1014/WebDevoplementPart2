
//TODO: Add readme file in this


// Import a module
var http = require('http')
const handles = require('./handlers');

// function htmlContent(test){
//     const content = '<!DOCTYPE html>' +
//     '<html>' +
//     '    <head>' +
//     '        <meta charset="utf-8" />' +
//     '        <title>'+ test +'</title>' +
//     '    </head>' + 
//     '    <body>' +
//     '         <p>Hello World !</p>' +
//     '    </body>' +
//     '</html>';
//     return content;
// }

// Declare an http server
http.createServer(function (req, res) {

    handles.serverHandles(req, res);
  

//   res.writeHead(200, {'Content-Type': 'text/html'});
  

// Start the server
}).listen(1337, '127.0.0.1')

// curl localhost:1337 or go to http://localhost:1337


