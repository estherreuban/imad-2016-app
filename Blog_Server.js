var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

console.log("Loaded!!!");
app.get(`/blog.html`, function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'Blog.html'));
});


