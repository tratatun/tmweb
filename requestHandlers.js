var exec = require("child_process").exec;

function start(response) {
    console.log("'start' was called." + new Date().toString() +"\nres:");
    
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">тратата'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
console.log(response);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

    /*
    //console.dir(exec);
    exec("dir",
        { timeout: 10000, maxBuffer: 20000*1024 },
        function (error, stdout, stderr) {
            //console.dir(error);
            console.dir(stdout);
            //console.dir(stderr);
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(stdout);
            response.end();
        });
    /*
        function (error, stdout, stderr) {
            //console.dir(res);
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(stdout);
            //res.write("\n whatthf?!");
            //console.dir(error);
            //console.dir(stdout);
            //console.dir(stderr);
            res.end();
        });
        */
}

function upload(res, postData) {
    console.log("'upload' was called." + new Date().toString());
	
console.log(postData);
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("You have sent\n" + postData);
    res.end();
    //return "Hello Upload\n";
}

exports.start = start;
exports.upload = upload;