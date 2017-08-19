var express = require('express')
var app = express()
app.all('*',function(req,res,next) {
    next()
})
app.get('/home',function(req,res){
    res.end('Hello World!')
})
app.listen(process.argv[2])

