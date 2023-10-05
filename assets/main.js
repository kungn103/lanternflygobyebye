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
function volumeOff(){
    if (document.getElementById('volume').innerText === "volume: on"){
        document.getElementById('volume').innerText = "volume: off";
    } else if (document.getElementById('volume').innerText === "volume: off"){
        document.getElementById('volume').innerText = "volume: on";
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
    document.getElementById('method-7').classList.add('hide');

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
}

// show 2 - backstabbing
function show2(){
    document.getElementById('method-1').classList.add('hide');
    document.getElementById('method-2').classList.remove('hide');
    document.getElementById('method-3').classList.add('hide');
    document.getElementById('method-4').classList.add('hide');
    document.getElementById('method-5').classList.add('hide');
    document.getElementById('method-6').classList.add('hide');
    document.getElementById('method-7').classList.add('hide');

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

    var stream = video.srcObject;
    var tracks = stream.getTracks();
    
    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    }
    
    video.srcObject = null;
}

// show 3 - waterboard
function show3(){
    document.getElementById('method-1').classList.add('hide');
    document.getElementById('method-2').classList.add('hide');
    document.getElementById('method-3').classList.remove('hide');
    document.getElementById('method-4').classList.add('hide');
    document.getElementById('method-5').classList.add('hide');
    document.getElementById('method-6').classList.add('hide');
    document.getElementById('method-7').classList.add('hide');

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
}

// show 4 - accidental miss 
function show4(){
    document.getElementById('method-1').classList.add('hide');
    document.getElementById('method-2').classList.add('hide');
    document.getElementById('method-3').classList.add('hide');
    document.getElementById('method-4').classList.remove('hide');
    document.getElementById('method-5').classList.add('hide');
    document.getElementById('method-6').classList.add('hide');
    document.getElementById('method-7').classList.add('hide');

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
}

// show 5 - phototaxis
function show5(){
    document.getElementById('method-1').classList.add('hide');
    document.getElementById('method-2').classList.add('hide');
    document.getElementById('method-3').classList.add('hide');
    document.getElementById('method-4').classList.add('hide');
    document.getElementById('method-5').classList.remove('hide');
    document.getElementById('method-6').classList.add('hide');
    document.getElementById('method-7').classList.add('hide');

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
}

// show 6 - play god
function show6(){
    document.getElementById('method-1').classList.add('hide');
    document.getElementById('method-2').classList.add('hide');
    document.getElementById('method-3').classList.add('hide');
    document.getElementById('method-4').classList.add('hide');
    document.getElementById('method-5').classList.add('hide');
    document.getElementById('method-6').classList.remove('hide');
    document.getElementById('method-7').classList.add('hide');

    var stream = video.srcObject;
    var tracks = stream.getTracks();
    
    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    }
    
    video.srcObject = null;
}

function hide6(){
    document.getElementById('method-6').classList.add('hide');
    var stream = video.srcObject;
    var tracks = stream.getTracks();
    
}

// show 6 - play god
var video = document.querySelector("#webcam");
function show7(){
    document.getElementById('method-1').classList.add('hide');
    document.getElementById('method-2').classList.add('hide');
    document.getElementById('method-3').classList.add('hide');
    document.getElementById('method-4').classList.add('hide');
    document.getElementById('method-5').classList.add('hide');
    document.getElementById('method-6').classList.add('hide');
    document.getElementById('method-7').classList.remove('hide');

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

function hide7(){
    document.getElementById('method-7').classList.add('hide');

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