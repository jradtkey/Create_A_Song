$(document).ready(function() {

  $('#button').click(function() {
    console.log("clicked");
    var beat0 = document.getElementById('beat0');
    var beat1 = document.getElementById('beat1');
    var beat2 = document.getElementById('beat2');
    var beat3 = document.getElementById('beat3');
    beat0.play();
    beat1.play();
    beat2.play();
    beat3.play();

  })

  $( "#misc_slider" ).slider({
    value  : 75,
    step   : 1,
    range  : 'min',
    min    : 0,
    max    : 100,
    change : function(){
        var value = $("#misc_slider").slider("value");
        document.getElementById("beat0").volume = (value / 100);
    }
  });


})
