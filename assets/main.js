// show + hide info page 
function showInfo(){
    document.getElementById('info').classList.remove('hide');
    document.getElementById('info-close').classList.remove('hide');
    document.getElementById('info-button').classList.add('hide');
}

function hideInfo(){
    document.getElementById('info').classList.add('hide');
    document.getElementById('info-close').classList.add('hide');
    document.getElementById('info-button').classList.remove('hide');
}

// volume control 
let scratchSound = document.getElementById("site-sound");
scratchSound.volume = 0.2;
function volumeOff(){
    if (document.getElementById('volume').innerText === "volume: on"){
        document.getElementById('volume').innerText = "volume: off";
        scratchSound.volume = 0;
    } else if (document.getElementById('volume').innerText === "volume: off"){
        document.getElementById('volume').innerText = "volume: on";
        scratchSound.volume = 0.2;
    }
}



// show 1 - step 
function show1(){
    document.getElementById('method-1').classList.remove('hide');
    document.getElementById('method-2').classList.add('hide');
    document.getElementById('method-3').classList.add('hide');
    document.getElementById('method-4').classList.add('hide');
    document.getElementById('method-5').classList.add('hide');
    document.getElementById('method-6').classList.add('hide');

    document.getElementById('nav-1').style.textDecoration = "underline";
    document.getElementById('nav-1').style.textDecorationColor = "#0451F5";
    document.getElementById('nav-2').style.textDecoration = "none";
    document.getElementById('nav-3').style.textDecoration = "none";
    document.getElementById('nav-4').style.textDecoration = "none";
    document.getElementById('nav-5').style.textDecoration = "none";
    document.getElementById('nav-6').style.textDecoration = "none";

    var stream = video.srcObject;
    var tracks = stream.getTracks();
    
    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    }
    
    video.srcObject = null;
}

function hide1(){
    document.getElementById('method-1').classList.add('hide');
    document.getElementById('nav-1').style.textDecoration = "none";
    
}

// show 2 - backstabbing
function show2(){
    document.getElementById('method-1').classList.add('hide');
    document.getElementById('method-2').classList.remove('hide');
    document.getElementById('method-3').classList.add('hide');
    document.getElementById('method-4').classList.add('hide');
    document.getElementById('method-5').classList.add('hide');
    document.getElementById('method-6').classList.add('hide');

    document.getElementById('nav-1').style.textDecoration = "none";
    document.getElementById('nav-2').style.textDecoration = "underline";
    document.getElementById('nav-3').style.textDecoration = "none";
    document.getElementById('nav-4').style.textDecoration = "none";
    document.getElementById('nav-5').style.textDecoration = "none";
    document.getElementById('nav-6').style.textDecoration = "none";
    document.getElementById('nav-2').style.textDecorationColor = "#0451F5";

    var stream = video.srcObject;
    var tracks = stream.getTracks();
    
    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    }
    
    video.srcObject = null;
}

function hide2(){
    document.getElementById('method-2').classList.add('hide');
    document.getElementById('nav-2').style.textDecoration = "none";
}

// show 3 - waterboard
function show3(){
    document.getElementById('method-1').classList.add('hide');
    document.getElementById('method-2').classList.add('hide');
    document.getElementById('method-3').classList.remove('hide');
    document.getElementById('method-4').classList.add('hide');
    document.getElementById('method-5').classList.add('hide');
    document.getElementById('method-6').classList.add('hide');

    document.getElementById('nav-1').style.textDecoration = "none";
    document.getElementById('nav-2').style.textDecoration = "none";
    document.getElementById('nav-3').style.textDecoration = "underline";
    document.getElementById('nav-4').style.textDecoration = "none";
    document.getElementById('nav-5').style.textDecoration = "none";
    document.getElementById('nav-6').style.textDecoration = "none";
    document.getElementById('nav-3').style.textDecorationColor = "#0451F5";

    var stream = video.srcObject;
    var tracks = stream.getTracks();
    
    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    }
    
    video.srcObject = null;
}

function hide3(){
    document.getElementById('method-3').classList.add('hide');
    document.getElementById('nav-3').style.textDecoration = "none";
}

// show 4 - accidental miss 
function show4(){
    document.getElementById('method-1').classList.add('hide');
    document.getElementById('method-2').classList.add('hide');
    document.getElementById('method-3').classList.add('hide');
    document.getElementById('method-4').classList.remove('hide');
    document.getElementById('method-5').classList.add('hide');
    document.getElementById('method-6').classList.add('hide');

    document.getElementById('nav-1').style.textDecoration = "none";
    document.getElementById('nav-2').style.textDecoration = "none";
    document.getElementById('nav-3').style.textDecoration = "none";
    document.getElementById('nav-4').style.textDecoration = "underline";
    document.getElementById('nav-5').style.textDecoration = "none";
    document.getElementById('nav-6').style.textDecoration = "none";
    document.getElementById('nav-4').style.textDecorationColor = "#0451F5";

    var stream = video.srcObject;
    var tracks = stream.getTracks();
    
    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    }
    
    video.srcObject = null;
}

function hide4(){
    document.getElementById('method-4').classList.add('hide');
    document.getElementById('nav-4').style.textDecoration = "none";
}

// show 5 - phototaxis
function show5(){
    document.getElementById('method-1').classList.add('hide');
    document.getElementById('method-2').classList.add('hide');
    document.getElementById('method-3').classList.add('hide');
    document.getElementById('method-4').classList.add('hide');
    document.getElementById('method-5').classList.remove('hide');
    document.getElementById('method-6').classList.add('hide');

    document.getElementById('nav-1').style.textDecoration = "none";
    document.getElementById('nav-2').style.textDecoration = "none";
    document.getElementById('nav-3').style.textDecoration = "none";
    document.getElementById('nav-4').style.textDecoration = "none";
    document.getElementById('nav-5').style.textDecoration = "underline";
    document.getElementById('nav-6').style.textDecoration = "none";
    document.getElementById('nav-5').style.textDecorationColor = "#0451F5";

    var stream = video.srcObject;
    var tracks = stream.getTracks();
    
    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    }
    
    video.srcObject = null;
}

function hide5(){
    document.getElementById('method-5').classList.add('hide');
    document.getElementById('nav-5').style.textDecoration = "none";
}

// show 6 - play god
var video = document.querySelector("#webcam");
function show6(){
    document.getElementById('method-1').classList.add('hide');
    document.getElementById('method-2').classList.add('hide');
    document.getElementById('method-3').classList.add('hide');
    document.getElementById('method-4').classList.add('hide');
    document.getElementById('method-5').classList.add('hide');
    document.getElementById('method-6').classList.remove('hide');

    document.getElementById('nav-1').style.textDecoration = "none";
    document.getElementById('nav-2').style.textDecoration = "none";
    document.getElementById('nav-3').style.textDecoration = "none";
    document.getElementById('nav-4').style.textDecoration = "none";
    document.getElementById('nav-5').style.textDecoration = "none";
    document.getElementById('nav-6').style.textDecoration = "underline";
    document.getElementById('nav-6').style.textDecorationColor = "#0451F5";

    if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
    }
}

function hide6(){
    document.getElementById('method-6').classList.add('hide');
    document.getElementById('nav-6').style.textDecoration = "none";


    var stream = video.srcObject;
    var tracks = stream.getTracks();
    
    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    }
    
    video.srcObject = null;
}




// function showInfo(){
//     document.getElementById('info').classList.add('hide');
//     document.getElementById('buttons').classList.remove('hide');
//     document.getElementById('hr0').classList.remove('hide');
// }