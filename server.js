var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
var Pages= {
        'one':{
        title:'Page 1',
        header:'About ME',
        content:`
         <p>This is my first html file One.html. This is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.html</p>
                <p> djkfdjkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd  hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd djkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd djkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd hgidf iug ui gi  hgihiuhg. ru rgerig hiurh giurhg ierh giehgdjkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd  iehdjkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd djkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd ighigheuig hi giehgirh giregir gri g.</p>
        `
        
        },
        
        'two':{
        title:'Page 2',
        header:'About MY HUSBAND',
        content:`
        <p>This is my SECOND html file One.html. This is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.html</p>
                <p> djkfdjkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd  hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd djkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd djkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd hgidf iug ui gi  hgihiuhg. ru rgerig hiurh giurhg ierh giehgdjkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd  iehdjkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd djkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd ighigheuig hi giehgirh giregir gri g.</p>
        `
        
        },
        
        
        'three':{
        title:'Page 3',
        header:'About MY CHILDREN',
        content:`
                  <p>This is my THIRD html file One.html. This is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.htmlThisssssssssssssssssssssssssssssssssssssssssssssssssssss llllllllllllllllllllllllllllllll cccccccccccccccccccccccccccccs is my first html file One.htmlThis is my first html file One.htmlThis is my first html file One.html</p>
                    <p> djkfdjkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd  hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd djkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd djkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd hgidf iug ui gi  hgihiuhg. ru rgerig hiurh giurhg ierh giehgdjkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd  iehdjkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd djkf hkhgkjf ghkjfd hkfkf  fjk ghkjdfg. fuighdfi gifd ighigheuig hi giehgirh giregir gri g.</p>
            `
        
        }

};
function createTemplate(data){
var title=data.title;
var header=data.header;
var content=data.content;
var htmlTemplate = `
<html>
    <head>
        <title>
        ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body align="center">
        <div id = "MainContent" class="container">
            
            <h1>${title}</h1>
            <hr>
            <h3>${header}</h3>
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

var counter=0;
app.get('/counter', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'index.html'));
   counter++;
   res.send(counter.toString());
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/Profile', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Profile.html'));
});

app.get('/ui/ProfileCounter.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ProfileCounter.js'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



app.get('/:pageNam', function (req, res) {
    
    var pageNam=req.params.pageNam;
  res.send(createTemplate(Pages[pageNam]));
});

/*app.get('/two', function (req, res) {
  res.send(createTemplate(TWO));
});

app.get('/three', function (req, res) {
  res.send(createTemplate(THREE));
});*/
/*
app.get('/two', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'two.html'));
});

app.get('/three', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'three.html'));
});
*/
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
