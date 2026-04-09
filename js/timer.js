let timerInterval;
const TIME_LIMIT = 25 * 60; // 25 minutes
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let running = false;

const circle = document.getElementById('timer-progress');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

const timeDisplay = document.getElementById('time-display');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) seconds = `0${seconds}`;
    return `${minutes}:${seconds}`;
}

function startTimer() {
    if (running) {
        clearInterval(timerInterval);
        startBtn.innerText = 'Start';
        running = false;
        return;
    }
    
    running = true;
    startBtn.innerText = 'Pause';
    
    timerInterval = setInterval(() => {
        timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        timeDisplay.innerText = formatTime(timeLeft);
        
        setProgress((timePassed / TIME_LIMIT) * 100);

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            running = false;
            startBtn.innerText = 'Start';
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timePassed = 0;
    timeLeft = TIME_LIMIT;
    timeDisplay.innerText = formatTime(timeLeft);
    setProgress(0);
    running = false;
    startBtn.innerText = 'Start';
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

// Init display
timeDisplay.innerText = formatTime(timeLeft);
setProgress(0);
