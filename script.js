var count =0;
var x=0;
function err(){
  if(count>1){
    document.getElementById("myAudio").pause();
    document.getElementById("myAudio").play();
  }else{
    document.getElementById("myAudio").play();
  }
  var elem = document.createElement('img');
  elem.setAttribute('src','https://image.ibb.co/j4Vzxa/unnamed.png');
  elem.setAttribute('onclick','err()');
  elem.style.marginTop =Math.floor(Math.random() * 75) + 'vh';
  elem.style.marginLeft = Math.floor(Math.random() * 86) + 'vw';
  document.body.appendChild(elem);
  count++;
  if(count==4){
    document.getElementById("myAudio2").play();
    crash();
  }
}
document.addEventListener('mousedown',function(){
  if(count<4){
    document.getElementById("myAudio").play();
  }
});
function bsod(){
 var all = document.getElementsByTagName("img");
  for(var i=0;i<all.length;i++){
    all[i].style.display = 'none';
  }
 document.body.style.background ='rgb(0, 1, 171) url("http://cdn.wallpapersafari.com/39/11/eY6wEW.png") no-repeat';
  var gif2 = document.createElement('img');
  gif2.setAttribute('src','https://media2.giphy.com/media/12bSyZ2lLVvZ4s/giphy.gif');
  gif2.style.marginTop ='80vh';
  document.body.appendChild(gif2);
}
function crash(){
   setTimeout(function () { 
      var spam = document.createElement('img');
      spam.setAttribute('src','https://image.ibb.co/j4Vzxa/unnamed.png');
      spam.style.marginTop =Math.floor(Math.random() * 75) + 'vh';
      spam.style.marginLeft = Math.floor(Math.random() * 86) + 'vw';
      document.body.appendChild(spam);
      x++;                     
      if (x < 160) {
         crash(); 
      }else{
        bsod();
      }
   }, 50)
}