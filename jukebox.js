var currentSong = document.getElementById("currentSong")
var playPause = document.getElementById("playPause")
var previous = document.getElementById("previous")
var next = document.getElementById("nextSong")
var stop = document.getElementById("stop")
var shuffle = document.getElementById("shuffle")
var songList = document.getElementById("songList")
var toggle = document.getElementById("toggle")

var voiceline1 = new Audio("audio/dva-halloween.ogg")
var voiceline2 = new Audio("audio/reaper-psychopath.mp3")
var voiceline3 = new Audio("audio/widow-oneshot.ogg")
var voiceline4 = new Audio("audio/genji-halloween.ogg")
var voiceline5 = new Audio("audio/s76-lawn.ogg")
var voiceline6 = new Audio("audio/roadhog-mouthpunch.ogg")
var voiceline7 = new Audio("audio/junkrat-halloween.ogg")
var voiceline8 = new Audio("audio/sombra-hackeverything.ogg")

var songLibrary = [voiceline1, voiceline2, voiceline3, voiceline4, voiceline5, voiceline6, voiceline7, voiceline8];
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
  }

  songDuration(){
    songLength = song.Library[current].duration;
  }
}
var juke = new Jukebox();
playPause.addEventListener("click", function(){
  juke.toggle();
})

previous.addEventListener("click", function(){
  juke.previousSong();
})

next.addEventListener("click", function(){
  juke.nextSong();
})

stop.addEventListener("click", function(){
  juke.stop();
})

shuffle.addEventListener("click", function(){

})
