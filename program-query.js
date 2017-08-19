var express = require('express')
var url = require('url')
var app = express()

app.get("/search", function(req, res) {
   var parsedUrl = url.parse(req.url,true)
   res.send(JSON.stringify(parsedUrl.query))
});

app.listen(process.argv[2])