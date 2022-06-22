var fs = require("fs");
var path = "./data";

fs.readdir(path, function(err, fileList){
    console.log(fileList);
})