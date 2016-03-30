var http = require('http');
var path = require('path');
var express = require('express');
var multer = require('multer');
var upload = multer({
  dest: 'uploads/'
})

var app = express();

app.use('/', express.static(path.join(__dirname + '/client')));

app.post('/api/', upload.single('uploadedfile'), function(req, res) {
  res.send("The file size is " + req.file.size + " bytes.");
})

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  console.log("server listening");
});
