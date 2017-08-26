
function slide(num) {
    var x = document.getElementById("bar" + num).value;
    document.getElementById("barVal"+ num).innerHTML = x;
}
function getVal(num) {
    var light1 = jQuery('#light1' + num).hasClass('on');
    var light2 = jQuery('#light2' + num).hasClass('on');
    var light3 = jQuery('#light3' + num).hasClass('on');
    var light4 = jQuery('#light4' + num).hasClass('on');
    var barVal1 = jQuery('#bar1' + num).val();
    var barVal2 = jQuery('#bar2' + num).val();
    console.log(light1);
    console.log(light2);
    console.log(light3);
    console.log(light4);
    if(num==1) {
      var btn1 = jQuery('#btn1' + num).hasClass('on');
      var btn2 = jQuery('#btn2' + num).hasClass('on');
      var btn3 = jQuery('#btn3' + num).hasClass('on');
      var btn4 = jQuery('#btn4' + num).hasClass('on');
      console.log(btn1);
      console.log(btn2);
      console.log(btn3);
      console.log(btn4);
    }
    else if(num==2) {
      var text1 = jQuery('#text1' + num).val();
      var text2 = jQuery('#text2' + num).val();
      var text3 = jQuery('#text3' + num).val();
      var text4 = jQuery('#text4' + num).val();
      console.log(text1);
      console.log(text2);
      console.log(text3);
      console.log(text4);
    }
    console.log(barVal1);
    console.log(barVal2);
}
$(document).ready(function () {
  $('.menu .item').tab();
  $( ".togglebtn" ).click(function() {
    $( this ).toggleClass( "on" );
  });
});