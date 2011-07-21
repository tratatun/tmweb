var http = require('http');
var url = require('url');

exports.start = function (route, handle){
    function onRequest(req, res) {
        var postData = "";
        var pathName = url.parse(req.url).pathname;
        console.log(new Date().toString() + "\nRequest for " + pathName + "\n");

        req.setEncoding("utf8");
        req.addListener("data", function (postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '" + postDataChunk + "'.");
        });
        req.addListener("end", function() {
            route(handle, pathName, res, postData);
        });
        
    }
    
    http.createServer(onRequest);//.listen(80);
    //tratatest
	console.log('Server created');
}
