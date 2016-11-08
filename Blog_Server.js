console.log("Loaded!!!");
app.get('/blog', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'Blog.html'));
});


