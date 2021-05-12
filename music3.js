// Know lets apply js
var images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/andy-lee-l_fdrk2OyJY-unsplash.jpg",
    "images/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg",
    "images/radu-florin-V8H6hXhmoqI-unsplash.jpg"
]
var song = [

    "song/3.mp3",
    "song/cj.mp3",
    "song/yalili.mp3",
    "song/yalan.mp3",
    "song/senoraita.mp3"
]
var sing_name = [
    "Name1",
    "Cj  Wo",
    "Ya Lili",
    "Yalan ",
    "Senorita"
]
var no = 0;

function next() {
    no++;
    if (no >= song.length)
        no = 0;

    document.getElementById("imag_circle").src = images[no];
    document.getElementById("image").src = images[no];
    document.getElementById("song").src = song[no];
    document.getElementById("song").play();
    document.getElementById("play").className = "fas fa-pause-circle";
    document.getElementById("songname").innerHTML = sing_name[no];
}

function pre() {
    no--;
    if (no < 0) {
        no = song.length - 1;
    }
    document.getElementById("imag_circle").src = images[no];
    document.getElementById("image").src = images[no];
    document.getElementById("song").src = song[no];
    document.getElementById("song").play();
    document.getElementById("play").className = "fas fa-pause-circle";
    document.getElementById("songname").innerHTML = sing_name[no];


}

// code for when we clik on play icon it play music or icon will be change
function playy() {
    var play = document.getElementById("play");
    if (play.className == "fas fa-play-circle") {
        play.className = "fas fa-pause-circle";
        document.getElementById("song").play();
        document.getElementById("pop").innerHTML = "Pause";
    } else {
        play.className = "fas fa-play-circle";
        document.getElementById("song").pause();
        document.getElementById("pop").innerHTML = "Play";
    }
}

// Know time of song will display

setInterval(() => {
    var time = document.getElementById("song");
    var Totime = Math.trunc(time.duration);
    console.log("song total time in second", Totime);
    //printing minuts
    var minut1 = Math.trunc(Totime / 60);
    console.log("How many minutes are in song", minut1);
    minut1 = minut1 < 10 ? "0" + minut1 : minut1;
    document.getElementById("right_left").innerHTML = minut1;
    //printing second
    var second1 = Math.trunc(Totime % 60);
    console.log("show second remainig in song", second1);
    second1 = second1 < 10 ? "0" + second1 : second1;
    document.getElementById("right_right").innerHTML = second1;

    //know current time will show left side (minuts)
    var ct = time.currentTime;
    var minut2 = Math.trunc(ct / 60);
    console.log("Current time show in minuts =", minut2);
    minut2 = minut2 < 10 ? "0" + minut2 : minut2;
    document.getElementById("left_left").innerHTML = minut2;
    //curret time second
    var second2 = Math.trunc(ct % 60);
    console.log("Current time show in second =", second2);
    second2 = second2 < 10 ? "0" + second2 : second2;
    document.getElementById("left_right").innerHTML = second2;
    //apply range max and min
    var R = document.getElementById("range");
    R.max = time.duration;
    R.value = time.currentTime;

    //play icon is not chang at ending song
    if (time.currentTime == time.duration) {
        var play = document.getElementById("play").className = "fas fa-play-circle";
        document.getElementById("pop").innerHTML = "Play";
    }
    //Volume
    console.log("volume show", time.volume);
    var vol = document.getElementById("range_volume").value;
    time.volume = vol / 100;
    document.getElementById("valuevolume").innerHTML = vol + "%";


}, 10);

function range() {
    var time = document.getElementById("song");
    var b = document.getElementById("range").value;
    time.currentTime = b;
}
// EventTarget.addEventListener("keydown", function(e) {
//     if (e.keyCode == 32) {
//         playy();
//     }
//     if (e.keyCode == 37) {
//         pre();
//     }
//     if (e.keyCode == 39) {
//         next();
//     }


// });
window.addEventListener("keydown", checkkeypress);

function checkkeypress(e) {
    if (e.keyCode == 32) {
        playy();
    }
    if (e.keyCode == 37) {
        pre();
    }
    if (e.keyCode == 39) {
        next();
    }

}