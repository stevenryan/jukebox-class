const currentSong = document.querySelector("#currentSong")
const playPause = document.querySelector("#playPause")
const previous = document.querySelector("#previous")
const next = document.querySelector("#nextSong")
const stop = document.querySelector("#stop")
const shuffle = document.querySelector("#shuffle")
const songList = document.querySelector("#songList")
const toggleDOM = document.querySelector("#toggle")
let track = document.getElementsByClassName("track")

var voiceline01 = new Audio("assets/audio/dva-halloween.ogg")
var voiceline02 = new Audio("assets/audio/reaper-psychopath.mp3")
var voiceline03 = new Audio("assets/audio/widow-oneshot.ogg")
var voiceline04 = new Audio("assets/audio/genji-halloween.ogg")
var voiceline05 = new Audio("assets/audio/s76-lawn.ogg")
var voiceline06 = new Audio("assets/audio/roadhog-mouthpunch.ogg")
var voiceline07 = new Audio("assets/audio/junkrat-halloween.ogg")
var voiceline08 = new Audio("assets/audio/sombra-hackeverything.ogg")
var voiceline09 = new Audio("assets/audio/tracer-cheerslove.ogg")
var voiceline10 = new Audio("assets/audio/hanzo-dragon.ogg")
var voiceline11 = new Audio("assets/audio/torbjorn-opinion.ogg")
var voiceline12 = new Audio("assets/audio/mccree-notugly.ogg")
var voiceline13 = new Audio("assets/audio/pharah-combatmaneuvers.mp3")

var songLibrary = [voiceline01, voiceline02, voiceline03, voiceline04, voiceline05, voiceline06, voiceline07, voiceline08, voiceline09, voiceline10, voiceline11, voiceline12, voiceline13];
var current = 0;
var isPlaying = false;

const songTitles = {
    0: "D.Va - Happy Halloween",
    1: "Reaper - I'm not a pyschopath",
    2: "Widowmaker - One shot, one kill",
    3: "Genji - Cyborg ninja",
    4: "Soldier 76 - Get off my lawn",
    5: "Roadhog - Everyone has a plan",
    6: "Junkrat - Happy Halloween",
    7: "Sombra - Everything can be hacked",
    8: "Tracer - Cheers love",
    9: "Hanzo - Unleash the dragon",
    10: "Torbjorn - Your opinion",
    11: "Mccree - I'm not ugly",
    12: "Pharah - Combat Maneuvers"
}

const heroImages = [
    "assets/images/reaper-portrait.png",
    "assets/images/pharah-portrait.png",
    "assets/images/soldier76-portrait.png",
    "assets/images/widowmaker-portrait.png",
    "assets/images/roadhog-portrait.png",
    "assets/images/tracer-portrait.png",
    "assets/images/genji-portrait.png",
    "assets/images/torbjorn-portrait.png",
    "assets/images/tracer-portrait.png"
];

class Jukebox {

    toggle() {
        if (!isPlaying) {
            songLibrary[current].play();
            isPlaying = true;
            toggleDOM.src = "assets/images/pause-button.png";
            songLibrary[current].onended = function () {
                isPlaying = false;
                toggleDOM.src = "assets/images/play-button.png";
            }
        } else {
            songLibrary[current].pause();
            isPlaying = false;
            toggleDOM.src = "assets/images/play-button.png";
        }
    }

    previousSong() {
        songLibrary[current].pause();
        songLibrary[current].currentTime = 0;
        if (current === 0) {
            current = songLibrary.length - 1;
            songLibrary[current].play();
            isPlaying = true;
            toggle.src = "assets/images/pause-button.png";
            songLibrary[current].onended = function () {
                isPlaying = false;
                toggle.src = "assets/images/play-button.png";
            }
        } else {
            current--;
            songLibrary[current].play();
            isPlaying = true;
            toggle.src = "assets/images/pause-button.png";
            songLibrary[current].onended = function () {
                isPlaying = false;
                toggle.src = "assets/images/play-button.png";
            }
        }
    }

    nextSong() {
        songLibrary[current].pause();
        songLibrary[current].currentTime = 0;
        if (current === songLibrary.length - 1) {
            current = 0;
            songLibrary[current].play();
            isPlaying = true;
            toggle.src = "assets/images/pause-button.png";
            songLibrary[current].onended = function () {
                isPlaying = false;
                toggle.src = "assets/images/play-button.png";
            }
        } else {
            current++;
            songLibrary[current].play();
            isPlaying = true;
            toggle.src = "assets/images/pause-button.png";
            songLibrary[current].onended = function () {
                isPlaying = false;
                toggle.src = "assets/images/play-button.png";
            }
        }
    }

    stop() {
        songLibrary[current].pause();
        songLibrary[current].currentTime = 0;
        isPlaying = false;
        toggle.src = "assets/images/play-button.png";
    }

    random() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        songLibrary[current].pause();
        songLibrary[current].currentTime = 0;
        current = getRandomInt(songLibrary.length);
        songLibrary[current].play();
        isPlaying = true;
        toggle.src = "assets/images/pause-button.png";
        songLibrary[current].onended = function () {
            isPlaying = false;
            toggle.src = "assets/images/play-button.png";
        }
    }

    checkSong(songid) {
        currentSong.innerHTML = songTitles[songid];
    }
}

var juke = new Jukebox();

playPause.addEventListener("click", function () {
    juke.toggle();
    juke.checkSong(current);
})

previous.addEventListener("click", function () {
    juke.previousSong();
    juke.checkSong(current);
})

next.addEventListener("click", function () {
    juke.nextSong();
    juke.checkSong(current);
})

stop.addEventListener("click", function () {
    juke.stop();
    juke.checkSong(current);
})

shuffle.addEventListener("click", function () {
    juke.random();
    juke.checkSong(current);
})

for (let i = 0; i < track.length; i++) {

    track[i].addEventListener('click', function (x) {

        songLibrary[current].pause();
        songLibrary[current].currentTime = 0;

        current = this.dataset.songid;

        songLibrary[current].play();
        isPlaying = true;
        toggle.src = "assets/images/pause-button.png";
        songLibrary[current].onended = function () {
            isPlaying = false;
            toggle.src = "assets/images/play-button.png";
        }
        juke.checkSong(current);
    })
}

function slideShow(heroid) {

    if (heroid === heroImages.length) { heroid = 0};

    const heroDOM = document.querySelector("#heroImages");
    heroDOM.innerHTML = "";

    const newHero = document.createElement('img');
    newHero.src = heroImages[heroid];

    heroDOM.appendChild(newHero);

    heroid++
    setTimeout(function(){
        slideShow(heroid)
    },3000)
}

slideShow(0);