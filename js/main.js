// Show & Hide plugin
$(document).ready(function(){

  $('#tab2').hide(function(){
    
  });
   $('#tab3').hide(function(){
    
  });

  $('#tab1btn').click(function(){
    $('#tab1').show(1000);
    $('#tab2').hide(1000);
    $('#tab3').hide(1000);
  });

  $('#tab2btn').click(function(){
    $('#tab1').hide(1000);
    $('#tab2').show(1000);
    $('#tab3').hide(1000);
  });

   $('#tab3btn').click(function(){
    $('#tab1').hide(1000);
    $('#tab2').hide(1000);
    $('#tab3').show(1000);
  });


});
// WOW Animation Js
new WOW().init();
