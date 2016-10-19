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
    alert("1");
    req.onreadystatechange = function (){
        if (req.readystate === XMLHttpRequest.DONE ){
            alert("2");
            if (req.status === 200){
                alert("3");
                var counter = req.responseText;
                var span1=document.getElementById("count1");
                span1.innerHTML=counter.toString();
                alert(counter.toString());
            }
        }
    };
    req.open('GET', 'http://estherreuban.imad.hasura-app.io/counter', true);
    req.send(null);
};
















