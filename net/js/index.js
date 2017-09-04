$(document).ready(function(){
  var mouseX, mouseY;
  var ww = $( window ).width();
  var wh = $( window ).height();
  var traX, traY, traO;
  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 40;
    traY = ((4 * mouseY) / 570) + 50;
    traO = ((4 * mouseY) / 570) + 20;
    console.log(traX);
    $(".meds").css({"background-position": traX + "%" + traY + "%"});
    $(".net").css({"background-position": traX + "%" + traO + "%"});
  });
});