const startingMinutes = 25;
let time = startingMinutes * 60;

let timerElement = document.getElementById('timer');

setInterval(updateTimer, 1000);

function updateTimer(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    timerElement.innerHTML = `${minutes}: ${seconds}`;
    time--;
}


