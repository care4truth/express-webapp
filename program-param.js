var express = require('express')
var app = express()

//app.use(require('stylus').middleware(process.argv[3]));
//app.use(express.static(process.argv[3]));

app.put("/message/:who", function(req, res) {
    res.send(require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + req.params.who)
      .digest('hex'));
});

app.listen(process.argv[2])