var express = require('express');
var morgan = require('morgan');
var path = require('path');


var app = express();

app.get('/blog', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'Blog.html'));
});
