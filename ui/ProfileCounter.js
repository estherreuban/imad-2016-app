console.log("Loaded!!!");
/*var counter=0;
var but = document.getElementById("button1");
but.onclick = function(){
counter++;

var span1=document.getElementById("count1");
span1.innerHTML=counter.toString();
};*/


var but = document.getElementById("button1");

but.onclick = function(){
    //////////////Create a request
    var req = new XMLHttpRequest();
    
    req.onreadystatechange = function (){
        if (req.readyState === XMLHttpRequest.DONE ){
    
            if (req.status === 200){
                var counter = req.responseText;
                var span1=document.getElementById("count1");
                span1.innerHTML=counter.toString();
            }
        }
    };
    req.open('GET', 'http://estherreuban.imad.hasura-app.io/counter', true);
    req.send(null);
};
















