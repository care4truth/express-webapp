
var express = require('express')
var app = express()
var path = require('path')

app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'pug')

app.all('*',function(req,res,next) {
    next()
})

app.get('/home',function(req,res){
     res.writeHead(200, { "Content-Type": "text/html" });
     res.redirect(process.argv[3] || 'index')
})
app.listen(process.argv[2])

