var exec = require("child_process").exec;

function start() {
    console.log("Request handler 'start' was called." + new Date().toString());
    var content = "empty";
    
    exec("/ls -lah", function (error, stdout, stderr) {
        content = stdout;
        //debugger;
    });
    
    
    /*
    test tratata!!!!!!*/
    function sleep(ms) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + ms);
        
    }
    
    sleep(10000);
    return content;
}

function upload() {
    console.log("Request handler 'upload' was called." + new Date().toString())
    return "Hello Upload\n";
}

exports.start = start;
exports.upload = upload;