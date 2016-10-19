console.log('LOADED');
var element=document.getElementById('MainContent');
/*console.log(element);
element.innerHTML="fffffffff";);*/

var img=document.getElementById('img1');

moveRight = function(){
    marginLeft+=100;
    img.style.marginLeft=marginLeft +px;
};

img.onclick = function (){
   
   var interval= setIntervel(moveRight, 100);

    
};