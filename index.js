var main = document.querySelector(".main");
var crcr = document.querySelector(".Cursor");


main.addEventListener("mousemove" , function(dets){
crcr.style.left = dets.x+"px"
crcr.style.top = dets.y+"px"

})