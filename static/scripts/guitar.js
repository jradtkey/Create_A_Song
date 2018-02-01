$(document).ready(function() {

  $('#play0').click(function() {
    console.log("clicked");
    var beat = document.getElementById('misc0');
    console.log(beat.paused);
    if (beat.paused == true) {
      beat.play();
    }
    else {
      beat.pause()
    }
  })

  $('#play1').click(function() {
    console.log("clicked");
    var beat = document.getElementById('misc1');
    console.log(beat.paused);
    if (beat.paused == true) {
      beat.play();
    }
    else {
      beat.pause()
    }
  })

  $('#play2').click(function() {
    console.log("clicked");
    var beat = document.getElementById('misc2');
    console.log(beat.paused);
    if (beat.paused == true) {
      beat.play();
    }
    else {
      beat.pause()
    }
  })

  $('#play3').click(function() {
    console.log("clicked");
    var beat = document.getElementById('misc3');
    console.log(beat.paused);
    if (beat.paused == true) {
      beat.play();
    }
    else {
      beat.pause()
    }
  })

  $('#play4').click(function() {
    console.log("clicked");
    var beat = document.getElementById('misc4');
    console.log(beat.paused);
    if (beat.paused == true) {
      beat.play();
    }
    else {
      beat.pause()
    }
  })

})
