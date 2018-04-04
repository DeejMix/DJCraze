$('body').hide();
$(document).ready(function() {
  
 $('body').fadeIn(1000);
  $('body').css('background', 'linear-gradient(45deg, orange, white, orange, white, orange, white)');
  $('.')
 
  
});
var second = setInterval(dateTimer, 1000);

function dateTimer() {
  var d = new Date();
  document.getElementById("date").innerHTML = d.toLocaleTimeString();
}

var countDownDate = new Date("Apr 9, 2018 12:40:00").getTime();

var x = setInterval(function() {
 var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 document.getElementById("timeTilNextSong").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
 if (distance < 0) {
    clearInterval(x);
    document.getElementById("timeTilNextSong").innerHTML = "EXPIRED";
  }
}, 1000);
