var http = require('http');
var url = require('url');

exports.start = function (route, handle){
    function onRequest(req, res) {
    
        res.writeHead(200, {'Content-Type': 'text/plain'});
        
        res.write("Hello World\n" + url.parse(req.url).pathname + "\n");
        res.write(route(handle, url.parse(req.url).pathname));
        res.write(new Date().toString());
        res.end();
    }
    
    http.createServer(onRequest);//.listen(80);
    //tratatest
	console.log('Server running at localhost');
}
