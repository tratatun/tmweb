var exec = require("child_process").exec;

function start(res) {
    console.log("Request handler 'start' was called." + new Date().toString() +"\nres:");
    console.dir(exec);
    exec("ls",
        function (error, stdout, stderr) {
        console.dir(res);
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write(stdout);
        res.write("\n wha" + stdout.toString() + "tthf?!");
        console.dir(error);
        console.dir(stdout);
        console.dir(stderr);
        res.end();
    });
}

function upload(res) {
    console.log("Request handler 'upload' was called." + new Date().toString())
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("Hello Upload, !!!!!");
    res.end();
    //return "Hello Upload\n";
}

exports.start = start;
exports.upload = upload;