var express = require('express')
var url = require('url')
var fs = require('fs')
var app = express()
app.set('json spaces', 0)
app.get("/books", function(req, res) {
    fs.readFile(process.argv[3],'utf8', function(err,data){
        if(err) throw err;
        var obj = JSON.parse(data)
        res.json(obj)
    })
});

app.listen(process.argv[2])