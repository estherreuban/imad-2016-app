console.log("Loaded!!!");
var counter=0;
var but = document.getElementById("button1");
but.onclick = function(){
counter++;
};
var span1=document.getElementById("count1");
span1.innerHTML=counter.toString();

