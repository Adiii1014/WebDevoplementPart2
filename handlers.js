const url = require('url')
const qs = require('querystring')

module.exports = {
    serverHandles : function (req, res) {
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)
        // Write a response header
        res.writeHead(200, {'Content-Type': 'text/html'});

      
        if (path === '/hello' && 'name' in params) {

        console.log('Hello');
        console.log(params['name']);
          if(params['name'] == 'kadir'){
            res.write('Hello ' + params['name'] + ' How are you today ?' )  
          }else if(params['name'] == 'adit'){
            res.write('Hello ' + params['name'] + ' Have you been in school today ?' )
          }
          else{
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('Not found');
          }
        } else {
          res.write('Hello anonymous')
        }
       // Write a response content
        res.end();
      }

}