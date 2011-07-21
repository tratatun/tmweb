var exec = require("child_process").exec;

function start(res) {
    console.log("Request handler 'start' was called." + new Date().toString());
    exec("ls",
        function (error, stdout, stderr) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(stdout);
        res.write("\n wthf?!");
        res.end();
        //sleep(10000);
        //content = stdout;
        //debugger;
    });
    
    /*function sleep(ms) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + ms);
        
    }
        
    return content;*/
}

function upload(res) {
    console.log("Request handler 'upload' was called." + new Date().toString())
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("Hello Upload, отзовись!!!!!");
    res.end();
    //return "Hello Upload\n";
}

exports.start = start;
exports.upload = upload;