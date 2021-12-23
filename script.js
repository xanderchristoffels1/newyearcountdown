var countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  if(hours < 10 && hours > 0){
    hours = "0" + hours;
  }
  if(minutes < 10){
    minutes = "0" + minutes
  }
  if(seconds < 10){
    seconds = "0" + seconds
  }
  
  document.getElementById("time").innerHTML = days + "d " + hours + ":" + minutes + ":" + seconds;

  if(days == 0){
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
    document.getElementById("time").style.fontSize = "15rem";
  }
  if(hours == 0 && days == 0){
    document.getElementById("time").innerHTML = minutes + ":" + seconds;
  }
  if(hours == 0 && minutes == 0 && days == 0){
    document.getElementById("time").innerHTML = seconds;
    document.getElementById("time").style.color = "#FF8E00";
  }
  if(hours == 0 && minutes == 0 && days == 0 && seconds < 11){
    document.getElementById("time").style.fontSize = "30rem";
    document.getElementById("time").style.color = "#06FF00";
  }


  if (distance < 0) {
    document.getElementById("time").innerHTML = "GELUKKIG NIEUWJAAR!";
    document.getElementById("time").style.fontSize = "10rem";

    document.getElementById("time").style.color = "#FFA705";
  }
}, 1000);

