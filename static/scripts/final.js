$(document).ready(function() {

  var beat0 = document.getElementById('beat0');
  var beat1 = document.getElementById('beat1');
  var beat2 = document.getElementById('beat2');
  var beat3 = document.getElementById('beat3');
  beat0.currentTime = 0;
  beat1.currentTime = 0;
  beat2.currentTime = 0;
  beat3.currentTime = 0;
  beat0.volume = .7;
  beat1.volume = .75;
  beat2.volume = .35;
  beat3.volume = .4;
  var size_bass = document.getElementById('bass');
  var size_drums = document.getElementById('drums');
  var size_sample = document.getElementById('sample');
  var size_keyboard = document.getElementById('keyboard');
  var play = false;

  //styling for shorter instruments
  $('#drums').css('margin-top', (size_bass.clientHeight-size_drums.clientHeight)+'px');
  $('#sample').css('margin-top', (size_bass.clientHeight-size_sample.clientHeight)+'px');
  $('#keyboard').css('margin-top', (size_bass.clientHeight-size_keyboard.clientHeight)+'px');

  $( window ).resize(function() {
    $('#drums').css('margin-top', (size_bass.clientHeight-size_drums.clientHeight)+'px');
    $('#sample').css('margin-top', (size_bass.clientHeight-size_sample.clientHeight)+'px');
    $('#keyboard').css('margin-top', (size_bass.clientHeight-size_keyboard.clientHeight)+'px');
  });


  $('#button').click(function() {

    if (true) {

    }

    if (!play) {
      $('#toggle').html('<i class="fas fa-stop-circle"></i>');
      play = true;
      beat0.play();
      beat1.play();
      beat2.play();
      beat3.play();
    }
    else {
      $('#toggle').html('<i class="fas fa-play-circle"></i>');
      play = false;
      beat0.pause();
      beat1.pause();
      beat2.pause();
      beat3.pause();
      beat0.currentTime = 0;
      beat1.currentTime = 0;
      beat2.currentTime = 0;
      beat3.currentTime = 0;
    }

  })

  $("#slider0").slider({
      value: 70,
      change: function ( event, ui ) {
          document.getElementById("beat0").volume = (ui.value/100);
          $("#volume0").html(ui.value)
        }
  });

  $("#slider1").slider({
      value: 75,
      change: function ( event, ui ) {
          document.getElementById("beat1").volume = (ui.value/100);
          $("#volume1").html(ui.value)
        }
  });

  $("#slider2").slider({
      value: 35,
      change: function ( event, ui ) {
          document.getElementById("beat2").volume = (ui.value/100);
          $("#volume2").html(ui.value)
        }
  });

  $("#slider3").slider({
      value: 40,
      change: function ( event, ui ) {
          document.getElementById("beat3").volume = (ui.value/100);
          $("#volume3").html(ui.value)
        }
  });

  // $('.pull-down').each(function() {
  //   var $this = $(this);
  //   $this.css('margin-top', $this.parent().height() - $this.height())
  // });


})
