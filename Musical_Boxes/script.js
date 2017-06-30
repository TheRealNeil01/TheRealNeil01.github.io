var cNote = document.getElementById('cAudio');
function playC() {
    cNote.currentTime = 0;
    cNote.play();
}
$('#c').on("mousedown", playC);

var dNote = document.getElementById('dAudio');
function playD() {
    dNote.currentTime = 0;
    dNote.play();
}
$('#d').on("mousedown", playD);

var eNote = document.getElementById('eAudio');
$('#e').mousedown(function() {
    eNote.currentTime = 0;
    eNote.play();
});
$('#d').on("mousedown", playD);

var fNote = document.getElementById('fAudio');
$('#f').mousedown(function() {
    fNote.currentTime = 0;
    fNote.play();
});

var gNote = document.getElementById('gAudio');
$('#g').mousedown(function() {
    gNote.currentTime = 0;
    gNote.play();
});

var aNote = document.getElementById('aAudio');
$('#a').mousedown(function() {
    aNote.currentTime = 0;
    aNote.play();
});

var bNote = document.getElementById('bAudio');
$('#b').mousedown(function() {
    bNote.currentTime = 0;
    bNote.play();
});

$(document).keypress(delegateKeypress);
function delegateKeypress(event) {
    if (event.charCode == 97 ) {
        $('#c').trigger("mousedown");
    }
    if (event.charCode == 115 ) {
        $('#d').trigger("mousedown");
    }
    if (event.charCode == 100 ) {
        $('#e').trigger("mousedown");
    }
    if (event.charCode == 102 ) {
        $('#f').trigger("mousedown");
    }
    if (event.charCode == 103 ) {
        $('#g').trigger("mousedown");
    }
    if (event.charCode == 104 ) {
        $('#a').trigger("mousedown");
    }
    if (event.charCode == 106 ) {
        $('#b').trigger("mousedown");
    }
}