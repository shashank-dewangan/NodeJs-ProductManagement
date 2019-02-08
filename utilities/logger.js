var bunyan = require('bunyan')
var fs = require('fs')
var file = fs.createWriteStream('./logs/application.log', {flags:'a'})
var filelogger = bunyan.createLogger({
    name:"MyProductApp",
    streams:[{
        level:'info',
        stream: file
    }]
});

module.exports=filelogger;