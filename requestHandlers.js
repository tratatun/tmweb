var exec = require("child_process").exec;

function start(res) {
    console.log("Request handler 'start' was called." + new Date().toString());
    
    
    exec("ls ",
        {timeout: 10000, maxBuffer: 20000*1024},
        function (error, stdout, stderr) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(stdout);
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
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("Hello Upload");
    res.end();
    //return "Hello Upload\n";
}

exports.start = start;
exports.upload = upload;