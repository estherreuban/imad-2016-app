console.log('LOADED');
var element=document.getElementById('MainContent');
/*console.log(element);
element.innerHTML="fffffffff";);*/

var img=document.getElementById('img1');
var marginLeft=0;
moveRight = function(){
    marginLeft+=3;
    if (marginLeft === 400)
        marginLeft=0;
    img.style.marginLeft=marginLeft +'px';
};

img.onclick = function (){
   
   var interval= setInterval(moveRight, 10);

    
};