let s1 = document.querySelector("#s1");
let m1 = document.querySelector("#m1");
let h1 = document.querySelector("#h1");
let sec = 0;
let min = 0;
let hrs = 0;
let start = document.getElementById('st')
let op = document.getElementById('op')

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome){
    $('#iframeAudio').remove()
}
else {
    $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
}


function timer() {
    start.style.display = 'none'
    op.style.display = 'block'
    tikTik = setInterval(function() {    
       
        if (sec >= 59) {
            sec = 0;
            min += 1;
            m1.innerHTML = min;
        }
        if(min >= 59){
            min = 0;
            hrs += 1;
            h1.innerHTML = hrs;
        }
        sec += 1;
        s1.innerHTML= sec;
    },1000)
}

function Stop() {
    clearInterval(tikTik)
    start.style.display = 'block'
    op.style.display = 'none'
}

function reset() {
 sec = 0; min = 0; hrs = 0;
 s1.innerHTML = 0;
 m1.innerHTML = 0;
 h1.innerHTML = 0;

}
