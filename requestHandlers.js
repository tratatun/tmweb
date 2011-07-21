var exec = require("child_process").exec;

function start() {
    console.log("Request handler 'start' was called." + new Date().toString());
    var content = "empty";
    
    exec("./ls -lah", function (error, stdout, stderr) {
        sleep(10000);
        content = stdout;
        //debugger;
    });
    
    function sleep(ms) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + ms);
        
    }
        
    return content;
}

function upload() {
    console.log("Request handler 'upload' was called." + new Date().toString())
    return "Hello Upload\n";
}

exports.start = start;
exports.upload = upload;