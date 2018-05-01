var currentSong = document.getElementById("currentSong")
var playPause = document.getElementById("playPause")
var previous = document.getElementById("previous")
var next = document.getElementById("nextSong")
var stop = document.getElementById("stop")
var shuffle = document.getElementById("shuffle")
var songList = document.getElementById("songList")
var toggle = document.getElementById("toggle")

var voiceline01 = new Audio("audio/dva-halloween.ogg")
var voiceline02 = new Audio("audio/reaper-psychopath.mp3")
var voiceline03 = new Audio("audio/widow-oneshot.ogg")
var voiceline04 = new Audio("audio/genji-halloween.ogg")
var voiceline05 = new Audio("audio/s76-lawn.ogg")
var voiceline06 = new Audio("audio/roadhog-mouthpunch.ogg")
var voiceline07 = new Audio("audio/junkrat-halloween.ogg")
var voiceline08 = new Audio("audio/sombra-hackeverything.ogg")
var voiceline09 = new Audio("audio/tracer-cheerslove.ogg")
var voiceline10 = new Audio("audio/hanzo-dragon.ogg")
var voiceline11 = new Audio("audio/torbjorn-opinion.ogg")

var songLibrary = [voiceline01, voiceline02, voiceline03, voiceline04, voiceline05, voiceline06, voiceline07, voiceline08, voiceline09, voiceline10, voiceline11];
var current = 0;
var isPlaying = false;

class Jukebox{
  toggle(){
    if (isPlaying == false){
      songLibrary[current].play();
      isPlaying = true;
      toggle.src = "images/pause-button.png";
      songLibrary[current].onended = function(){
        isPlaying = false;
        toggle.src = "images/play-button.png";
      }
    } else{
      songLibrary[current].pause();
      isPlaying = false;
      toggle.src = "images/play-button.png";
    }
  }

  previousSong(){
    songLibrary[current].pause();
    songLibrary[current].currentTime = 0;
    if (current === 0){
      current = songLibrary.length - 1;
      songLibrary[current].play();
      isPlaying = true;
      toggle.src = "images/pause-button.png";
      songLibrary[current].onended = function(){
        isPlaying = false;
        toggle.src = "images/play-button.png";
      }
    } else {
      current--;
      songLibrary[current].play();
      isPlaying = true;
      toggle.src = "images/pause-button.png";
      songLibrary[current].onended = function(){
        isPlaying = false;
        toggle.src = "images/play-button.png";
      }
    }
  }

  nextSong(){
    songLibrary[current].pause();
    songLibrary[current].currentTime = 0;
    if (current === songLibrary.length - 1){
      current = 0;
      songLibrary[current].play();
      isPlaying = true;
      toggle.src = "images/pause-button.png";
      songLibrary[current].onended = function(){
        isPlaying = false;
        toggle.src = "images/play-button.png";
      }
    } else {
      current++;
      songLibrary[current].play();
      isPlaying = true;
      toggle.src = "images/pause-button.png";
      songLibrary[current].onended = function(){
        isPlaying = false;
        toggle.src = "images/play-button.png";
      }
    }
  }

  stop(){
    songLibrary[current].pause();
    songLibrary[current].currentTime = 0;
    isPlaying = false;
    toggle.src = "images/play-button.png";
  }

  random(){
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    songLibrary[current].pause();
    songLibrary[current].currentTime = 0;
    current = getRandomInt(songLibrary.length);
    songLibrary[current].play();
    isPlaying = true;
    toggle.src = "images/pause-button.png";
    songLibrary[current].onended = function(){
      isPlaying = false;
      toggle.src = "images/play-button.png";
    }
  }

  checkSong(){
      if (current === 0) {
        currentSong.innerHTML = "D.Va - Happy Halloween";
      } else if (current === 1) {
        currentSong.innerHTML = "Reaper - I'm not a pyschopath";
      } else if (current === 2) {
        currentSong.innerHTML = "Widowmaker - One shot, one kill";
      } else if (current === 3) {
        currentSong.innerHTML = "Genji - Cyborg ninja";
      } else if (current === 4) {
        currentSong.innerHTML = "Soldier 76 - Get off my lawn";
      } else if (current === 5) {
        currentSong.innerHTML = "Roadhog - Everyone has a plan";
      } else if (current === 6) {
        currentSong.innerHTML = "Junkrat - Happy Halloween";
      } else if (current === 7) {
        currentSong.innerHTML = "Sombra - Everything can be hacked";
      } else if (current === 8) {
        currentSong.innerHTML = "Tracer - Cheers love";
      } else if (current === 9) {
        currentSong.innerHTML = "Hanzo - Unleash the dragon";
      } else {
        currentSong.innerHTML = "Torbjorn - Your opinion";
      }
  }
}
var juke = new Jukebox();
playPause.addEventListener("click", function(){
  juke.toggle();
  juke.checkSong();
})

previous.addEventListener("click", function(){
  juke.previousSong();
  juke.checkSong();
})

next.addEventListener("click", function(){
  juke.nextSong();
  juke.checkSong();
})

stop.addEventListener("click", function(){
  juke.stop();
  juke.checkSong();
})

shuffle.addEventListener("click", function(){
  juke.random();
  juke.checkSong();
})
