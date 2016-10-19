console.log('LOADED');
var element=document.getElementById('MainContent');
/*console.log(element);
element.innerHTML="fffffffff";);*/

var img=document.getElementById('img1');
var marginLeft=0;
//var marginTop=0;
moveRight = function(){
    marginLeft++;
  //  marginTop++;
    if (marginLeft > 1000)
        marginLeft=0;
/*    if (marginTop>500)
    marginTop=0;*/
    img.style.marginLeft=marginLeft +'px';
   // img.style.marginTop=marginTop +'px';
};

img.onclick = function (){
   
   var interval= setInterval(moveRight, 1);

    
};