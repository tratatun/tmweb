var exec = require("child_process").exec;

function start(response) {
    console.log("'start' was called." + new Date().toString() +"\nres:");
    //console.dir(exec);
    exec("ls -lah",
        { timeout: 10000, maxBuffer: 20000*1024 },
        function (error, stdout, stderr) {
            console.dir(error);
            console.dir(stdout);
            console.dir(stderr);
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
        });*/
}

function upload(res) {
    console.log("'upload' was called." + new Date().toString())
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("Hello Upload, !!!!!");
    res.end();
    //return "Hello Upload\n";
}

exports.start = start;
exports.upload = upload;