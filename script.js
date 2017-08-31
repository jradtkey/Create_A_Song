$(document).ready(function () {


/*
    var beatMe1 = document.getElementById('beat1');
    var beatMe2 = document.getElementById('beat2');
    var beatMe3 = document.getElementById('beat3');
    var beatMe4 = document.getElementById('beat4');
    var beatMe5 = document.getElementById('beat5');
    var bassMe1 = document.getElementById('bass1');
    var bassMe2 = document.getElementById('bass2');
    var bassMe3 = document.getElementById('bass3');
    var bassMe4 = document.getElementById('bass4');
    var bassMe5 = document.getElementById('bass5');
    var keyMe1 = document.getElementById('key1');
    var keyMe2 = document.getElementById('key2');
    var keyMe3 = document.getElementById('key3');
    var keyMe4 = document.getElementById('key4');
    var keyMe5 = document.getElementById('key5');
*/


  $('#create_beat').click(function()  {

    for (var i = 1; i < 6; i++) {
      var beatMei = document.getElementById('beat'+i);
      beatMei.play();
    }
    for (var i = 1; i < 6; i++) {
      var bassMei = document.getElementById('bass'+i);
      bassMei.play();
    }
    for (var i = 1; i < 6; i++) {
      var keyMei = document.getElementById('key'+i);
      keyMei.play();
    }
/* start playing all tracks

    beatMe1.play();
    beatMe2.play();
    beatMe3.play();
    beatMe4.play();
    beatMe5.play();
    bassMe1.play();
    bassMe2.play();
    bassMe3.play();
    bassMe4.play();
    bassMe5.play();
    keyMe1.play();
    keyMe2.play();
    keyMe3.play();
    keyMe4.play();
    keyMe5.play();
*/

    for (var i = 1; i < 6; i++) {
      document.getElementById('beat'+i).muted = true;
    }
    for (var i = 1; i < 6; i++) {
      document.getElementById('bass'+i).muted = true;
    }
    for (var i = 1; i < 6; i++) {
      document.getElementById('key'+i).muted = true;
    }
/* mute all tracks

    document.getElementById('beat1').muted = true;
    document.getElementById('beat2').muted = true;
    document.getElementById('beat3').muted = true;
    document.getElementById('beat4').muted = true;
    document.getElementById('beat5').muted = true;
    document.getElementById('bass1').muted = true;
    document.getElementById('bass2').muted = true;
    document.getElementById('bass3').muted = true;
    document.getElementById('bass4').muted = true;
    document.getElementById('bass5').muted = true;
    document.getElementById('key1').muted = true;
    document.getElementById('key2').muted = true;
    document.getElementById('key3').muted = true;
    document.getElementById('key4').muted = true;
    document.getElementById('key5').muted = true;
*/



     var rand0 = Math.floor(Math.random()*5);
     var rand1 = Math.floor(Math.random()*5);
     var rand2 = Math.floor(Math.random()*5);
     var rand3 = Math.floor(Math.random()*5);


     if (rand0 === 4) {
       toggle_drums1();
      $('#drum').html("1")
     } else if (rand0 === 3) {
       toggle_drums2();
       $('#drum').html("2")
     } if (rand0 === 2) {
       toggle_drums3();
       $('#drum').html("3")
     } else if (rand0 === 1) {
       toggle_drums4();
       $('#drum').html("4")
     } else if (rand0 === 0) {
       toggle_drums5();
       $('#drum').html("5")
     }

     if (rand1 === 4) {
       toggle_bass1();
       $('#bass').html("1")
     } else if (rand1 === 3) {
       toggle_bass2();
       $('#bass').html("2")
     } if (rand1 === 2) {
       toggle_bass3();
       $('#bass').html("3")
     } else if (rand1 === 1) {
       toggle_bass4();
       $('#bass').html("4")
     } else if (rand1 === 0) {
       toggle_bass5();
       $('#bass').html("5")
     }

     if (rand2 === 4) {
       toggle_key1();
       $('#key').html("1")
     } else if (rand2 === 3) {
       toggle_key2();
       $('#key').html("2")
     } if (rand2 === 2) {
       toggle_key3();
       $('#key').html("3")
     } else if (rand2 === 1) {
       toggle_key4();
       $('#key').html("4")
     } else if (rand2 === 0) {
       toggle_key5();
       $('#key').html("5")
     }

    var audio_beat1 = document.getElementById('beat1');
    var audio_beat2 = document.getElementById('beat2');
    var audio_beat3 = document.getElementById('beat3');
    var audio_beat4 = document.getElementById('beat4');
    var audio_beat5 = document.getElementById('beat5');
    var audio_bass1 = document.getElementById('bass1');
    var audio_bass2 = document.getElementById('bass2');
    var audio_bass3 = document.getElementById('bass3');
    var audio_bass4 = document.getElementById('bass4');
    var audio_bass5 = document.getElementById('bass5');
    var audio_key1 = document.getElementById('key1');
    var audio_key2 = document.getElementById('key2');
    var audio_key3 = document.getElementById('key3');
    var audio_key4 = document.getElementById('key4');
    var audio_key5 = document.getElementById('key5');





    function toggle_drums1() {
      $('#mute_beat').click(function () {
        document.getElementById('beat1').muted = true;
      });
      $('#play_beat').click(function () {
        if (audio_beat1.muted == false) {
          document.getElementById('beat1').muted = true;
        } else {
          audio_beat1.muted = true;
          document.getElementById('beat1').muted = false;
        }
      });
    }

    function toggle_drums2() {
      $('#mute_beat').click(function () {
        document.getElementById('beat2').muted = true;
      });
      $('#play_beat').click(function () {
        if (audio_beat2.muted == false) {
          document.getElementById('beat2').muted = true;
        } else {
          audio_beat2.muted = true;
          document.getElementById('beat2').muted = false;
        }
      });
    }

    function toggle_drums3() {
      $('#mute_beat').click(function () {
        document.getElementById('beat3').muted = true;
      });
      $('#play_beat').click(function () {
        if (audio_beat3.muted == false) {
          document.getElementById('beat3').muted = true;
        } else {
          audio_beat3.muted = true;
          document.getElementById('beat3').muted = false;
        }
      });
    }

    function toggle_drums4() {
      $('#mute_beat').click(function () {
        document.getElementById('beat4').muted = true;
      });
      $('#play_beat').click(function () {
        if (audio_beat4.muted == false) {
          document.getElementById('beat4').muted = true;
        } else {
          audio_beat4.muted = true;
          document.getElementById('beat4').muted = false;
        }
      });
    }

    function toggle_drums5() {
      $('#mute_beat').click(function () {
        document.getElementById('beat5').muted = true;
      });
      $('#play_beat').click(function () {
        if (audio_beat5.muted == false) {
          document.getElementById('beat5').muted = true;
        } else {
          audio_beat5.muted = true;
          document.getElementById('beat5').muted = false;
        }
      });
    }

    function toggle_bass1() {
      $('#mute_bass').click(function () {
        document.getElementById('bass1').muted = true;
      });
      $('#play_bass').click(function () {
        if (audio_bass1.mute == false) {
          document.getElementById('bass1').muted = true;
        } else {
          audio_bass1.mute = true;
          document.getElementById('bass1').muted = false;
        }
      });
    }

    function toggle_bass2() {
      $('#mute_bass').click(function () {
        document.getElementById('bass2').muted = true;
      });
      $('#play_bass').click(function () {
        if (audio_bass2.mute == false) {
          document.getElementById('bass2').muted = true;
        } else {
          audio_bass2.mute = true;
          document.getElementById('bass2').muted = false;
        }
      });
    }

    function toggle_bass3() {
      $('#mute_bass').click(function () {
        document.getElementById('bass3').muted = true;
      });
      $('#play_bass').click(function () {
        if (audio_bass3.mute == false) {
          document.getElementById('bass3').muted = true;
        } else {
          audio_bass3.mute = true;
          document.getElementById('bass3').muted = false;
        }
      });
    }

    function toggle_bass4() {
      $('#mute_bass').click(function () {
        document.getElementById('bass4').muted = true;
      });
      $('#play_bass').click(function () {
        if (audio_bass4.mute == false) {
          document.getElementById('bass4').muted = true;
        } else {
          audio_bass4.mute = true;
          document.getElementById('bass4').muted = false;
        }
      });
    }

    function toggle_bass5() {
      $('#mute_bass').click(function () {
        document.getElementById('bass5').muted = true;
      });
      $('#play_bass').click(function () {
        if (audio_bass5.mute == false) {
          document.getElementById('bass5').muted = true;
        } else {
          audio_bass5.mute = true;
          document.getElementById('bass5').muted = false;
        }
      });
    }

    function toggle_key1() {
      $('#mute_keyboard').click(function () {
        document.getElementById('key1').muted = true;
      });
      $('#play_keyboard').click(function () {
        if (audio_key1.mute == false) {
          document.getElementById('key1').muted = true;
        } else {
          audio_key1.mute = true;
          document.getElementById('key1').muted = false;
        }
      });
    }

    function toggle_key2() {
      $('#mute_keyboard').click(function () {
        document.getElementById('key2').muted = true;
      });
      $('#play_keyboard').click(function () {
        if (audio_key2.mute == false) {
          document.getElementById('key2').muted = true;
        } else {
          audio_key2.mute = true;
          document.getElementById('key2').muted = false;
        }
      });
    }

    function toggle_key3() {
      $('#mute_keyboard').click(function () {
        document.getElementById('key3').muted = true;
      });
      $('#play_keyboard').click(function () {
        if (audio_key3.mute == false) {
          document.getElementById('key3').muted = true;
        } else {
          audio_key3.mute = true;
          document.getElementById('key3').muted = false;
        }
      });
    }

    function toggle_key4() {
      $('#mute_keyboard').click(function () {
        document.getElementById('key4').muted = true;
      });
      $('#play_keyboard').click(function () {
        if (audio_key4.mute == false) {
          document.getElementById('key4').muted = true;
        } else {
          audio_key4.mute = true;
          document.getElementById('key4').muted = false;
        }
      });
    }

    function toggle_key5() {
      $('#mute_keyboard').click(function () {
        document.getElementById('key5').muted = true;
      });
      $('#play_keyboard').click(function () {
        if (audio_key5.mute == false) {
          document.getElementById('key5').muted = true;
        } else {
          audio_key5.mute = true;
          document.getElementById('key5').muted = false;
        }
      });
    }

    $('#previous_bass').click(function () {
      if (document.getElementById('bass1').muted == false) {
        document.getElementById('bass1').muted = true;
        document.getElementById('bass5').muted = false;
        toggle_bass5();
        $('#bass').html('5');
      } else if (document.getElementById('bass2').muted == false) {
        document.getElementById('bass2').muted = true;
        document.getElementById('bass1').muted = false;
        toggle_bass1();
        $('#bass').html('1');
      } else if (document.getElementById('bass3').muted == false) {
        document.getElementById('bass3').muted = true;
        document.getElementById('bass2').muted = false;
        toggle_bass2();
        $('#bass').html('2');
      } else if (document.getElementById('bass4').muted == false) {
        document.getElementById('bass4').muted = true;
        document.getElementById('bass3').muted = false;
        toggle_bass3();
        $('#bass').html('3');
      } else if (document.getElementById('bass5').muted == false) {
        document.getElementById('bass5').muted = true;
        document.getElementById('bass4').muted = false;
        toggle_bass4();
        $('#bass').html('4');
      }
    })

    $('#next_bass').click(function () {
      if (document.getElementById('bass1').muted == false) {
        document.getElementById('bass1').muted = true;
        document.getElementById('bass2').muted = false;
        toggle_bass2();
        $('#bass').html('2');
      } else if (document.getElementById('bass2').muted == false) {
        document.getElementById('bass2').muted = true;
        document.getElementById('bass3').muted = false;
        toggle_bass3();
        $('#bass').html('3');
      } else if (document.getElementById('bass3').muted == false) {
        document.getElementById('bass3').muted = true;
        document.getElementById('bass4').muted = false;
        toggle_bass4();
        $('#bass').html('4');
      } else if (document.getElementById('bass4').muted == false) {
        document.getElementById('bass4').muted = true;
        document.getElementById('bass5').muted = false;
        toggle_bass5();
        $('#bass').html('5');
      } else if (document.getElementById('bass5').muted == false) {
        document.getElementById('bass5').muted = true;
        document.getElementById('bass1').muted = false;
        toggle_bass1();
        $('#bass').html('1');
      }
    })

    $('#previous_drums').click(function () {
      if (document.getElementById('beat1').muted == false) {
        document.getElementById('beat1').muted = true;
        document.getElementById('beat5').muted = false;
        toggle_drums5();
        $('#drum').html('5');
      } else if (document.getElementById('beat2').muted == false) {
        document.getElementById('beat2').muted = true;
        document.getElementById('beat1').muted = false;
        toggle_drums1();
        $('#drum').html('1');
      } else if (document.getElementById('beat3').muted == false) {
        document.getElementById('beat3').muted = true;
        document.getElementById('beat2').muted = false;
        toggle_drums2();
        $('#drum').html('2');
      } else if (document.getElementById('beat4').muted == false) {
        document.getElementById('beat4').muted = true;
        document.getElementById('beat3').muted = false;
        toggle_drums3();
        $('#drum').html('3');
      } else if (document.getElementById('beat5').muted == false) {
        document.getElementById('beat5').muted = true;
        document.getElementById('beat4').muted = false;
        toggle_drums4();
        $('#drum').html('4');
      }
    })

    $('#next_drums').click(function () {
      if (document.getElementById('beat1').muted == false) {
        document.getElementById('beat1').muted = true;
        document.getElementById('beat2').muted = false;
        toggle_drums2();
        $('#drum').html('2');
      } else if (document.getElementById('beat2').muted == false) {
        document.getElementById('beat2').muted = true;
        document.getElementById('beat3').muted = false;
        toggle_drums3();
        $('#drum').html('3');
      } else if (document.getElementById('beat3').muted == false) {
        document.getElementById('beat3').muted = true;
        document.getElementById('beat4').muted = false;
        toggle_drums4();
        $('#drum').html('4');
      } else if (document.getElementById('beat4').muted == false) {
        document.getElementById('beat4').muted = true;
        document.getElementById('beat5').muted = false;
        toggle_drums5();
        $('#drum').html('5');
      } else if (document.getElementById('beat5').muted == false) {
        document.getElementById('beat5').muted = true;
        document.getElementById('beat1').muted = false;
        toggle_drums1();
        $('#drum').html('1');
      }
    })

    $('#next_keyboard').click(function () {
      if (document.getElementById('key1').muted == false) {
        document.getElementById('key1').muted = true;
        document.getElementById('key2').muted = false;
        toggle_key2();
        $('#key').html('2');
      } else if (document.getElementById('key2').muted == false) {
        document.getElementById('key2').muted = true;
        document.getElementById('key3').muted = false;
        toggle_key3();
        $('#key').html('3');
      } else if (document.getElementById('key3').muted == false) {
        document.getElementById('key3').muted = true;
        document.getElementById('key4').muted = false;
        toggle_key4();
        $('#key').html('4');
      } else if (document.getElementById('key4').muted == false) {
        document.getElementById('key4').muted = true;
        document.getElementById('key5').muted = false;
        toggle_key5();
        $('#key').html('5');
      } else if (document.getElementById('key5').muted == false) {
        document.getElementById('key5').muted = true;
        document.getElementById('key1').muted = false;
        toggle_key1();
        $('#key').html('1');
      }
    })

    $('#previous_keyboard').click(function () {
      if (document.getElementById('key1').muted == false) {
        document.getElementById('key1').muted = true;
        document.getElementById('key5').muted = false;
        toggle_key5();
        $('#key').html('5');
      } else if (document.getElementById('key2').muted == false) {
        document.getElementById('key2').muted = true;
        document.getElementById('key1').muted = false;
        toggle_key1();
        $('#key').html('1');
      } else if (document.getElementById('key3').muted == false) {
        document.getElementById('key3').muted = true;
        document.getElementById('key2').muted = false;
        toggle_key2();
        $('#key').html('2');
      } else if (document.getElementById('key4').muted == false) {
        document.getElementById('key4').muted = true;
        document.getElementById('key3').muted = false;
        toggle_key3();
        $('#key').html('3');
      } else if (document.getElementById('key5').muted == false) {
        document.getElementById('key5').muted = true;
        document.getElementById('key4').muted = false;
        toggle_key4();
        $('#key').html('4');
      }
    })


  });

  $( "#bass_slider" ).slider({
    value  : 75,
    step   : 1,
    range  : 'min',
    min    : 0,
    max    : 100,
    change : function(){
        var value = $("#bass_slider").slider("value");
        document.getElementById("bass1").volume = (value / 100);
        document.getElementById("bass2").volume = (value / 100);
        document.getElementById("bass3").volume = (value / 100);
        document.getElementById("bass4").volume = (value / 100);
        document.getElementById("bass5").volume = (value / 100);
    }
  });

  $( "#drums_slider" ).slider({
    value  : 75,
    step   : 1,
    range  : 'min',
    min    : 0,
    max    : 100,
    change : function(){
        var value = $("#drums_slider").slider("value");
        document.getElementById("beat1").volume = (value / 100);
        document.getElementById("beat2").volume = (value / 100);
        document.getElementById("beat3").volume = (value / 100);
        document.getElementById("beat4").volume = (value / 100);
        document.getElementById("beat5").volume = (value / 100);
    }
  });

  $( "#keyboard_slider" ).slider({
    value  : 75,
    step   : 1,
    range  : 'min',
    min    : 0,
    max    : 100,
    change : function(){
        var value = $("#keyboard_slider").slider("value");
        document.getElementById("key1").volume = (value / 100);
        document.getElementById("key2").volume = (value / 100);
        document.getElementById("key3").volume = (value / 100);
        document.getElementById("key4").volume = (value / 100);
        document.getElementById("key5").volume = (value / 100);
    }
  });

  $( "#horns_slider" ).slider({
    value  : 75,
    step   : 1,
    range  : 'min',
    min    : 0,
    max    : 100,
    change : function(){
        var value = $("#bass_slider").slider("value");
        document.getElementById("bass1").volume = (value / 100);
        document.getElementById("bass2").volume = (value / 100);
        document.getElementById("bass3").volume = (value / 100);
        document.getElementById("bass4").volume = (value / 100);
        document.getElementById("bass5").volume = (value / 100);
    }
  });


$('#create_beat').click(function () {
  $('#play_bass').click();
  $('#play_beat').click();
  $('#play_keyboard').click();
})

$('#refresh').click(function () {
  location.reload();
})



})
