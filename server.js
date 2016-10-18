var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

var ONE={
title:'Page 1',
header:'About ME',
content:`
 <p>This is my first html file One.html. This is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.html</p>
        <p> djkfdjkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd  hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd djkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd djkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd hgidf iug ui gi  hgihiuhg. ru rgerig hiurh giurhg ierh giehgdjkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd  iehdjkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd djkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd ighigheuig hi giehgirh giregir gri g.</p>
`

};

var TWO={
title:'Page 2',
header:'About MY HUSBAND',
content:`
<p>This is my SECOND html file One.html. This is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.html</p>
        <p> djkfdjkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd  hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd djkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd djkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd hgidf iug ui gi  hgihiuhg. ru rgerig hiurh giurhg ierh giehgdjkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd  iehdjkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd djkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd ighigheuig hi giehgirh giregir gri g.</p>
`

};


var THREE={
title:'Page 3',
header:'About MY CHILDREN',
content:`
          <p>This is my THIRD html file One.html. This is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThisssssssssssssssssssssssssssssssssssssssssssssssssssss llllllllllllllllllllllllllllllll cccccccccccccccccccccccccccccs is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.html</p>
            <p> djkfdjkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd  hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd djkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd djkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd hgidf iug ui gi  hgihiuhg. ru rgerig hiurh giurhg ierh giehgdjkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd  iehdjkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd djkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd ighigheuig hi giehgirh giregir gri g.</p>
    `

};

function createTemplate(data){
var title=data.title;
var header=data.header;
var content=data.content;
var htmlTemplate = `
<html>
    <head>
        <title>
        ${title};
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body align="center">
        <div class="container">
            
            <h1>${title}</h1>
            <hr>
            <h3>${Header}</h3>
            <div class="justifyText">
        ${content};
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



app.get('/one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'one.html'));
});

app.get('/two', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'two.html'));
});

app.get('/three', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'three.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
