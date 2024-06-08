let timer;
let isRunning = false;
let timeLeft = 30000; // 5 minut v setinách sekund
let isStopwatch = false;
let elapsedTime = 0;
let startTime;

const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const timeDisplay = document.getElementById('time');
const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');
const timerBtn = document.getElementById('timerBtn');
const stopwatchBtn = document.getElementById('stopwatchBtn');
const timerDiv = document.querySelector('.timer');
const settingsDiv = document.getElementById('settings');

function updateTimeDisplay() {
 let minutes = Math.floor(timeLeft / 6000);
 let seconds = Math.floor((timeLeft % 6000) / 100);
 let centiseconds = timeLeft % 100;
 timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centiseconds).padStart(2, '0')}`;
}

function beep() {
 let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
 let oscillator = audioCtx.createOscillator();
 oscillator.type = 'sine';
 oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
 oscillator.connect(audioCtx.destination);
 oscillator.start();
 oscillator.stop(audioCtx.currentTime + 1);
}

function startPauseTimer() {
 if (isRunning) {
  clearInterval(timer);
  startPauseBtn.textContent = 'Spustit';
 } else {
  if (isStopwatch) {
   startTime = Date.now() - elapsedTime;
   timer = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    let centiseconds = Math.floor(elapsedTime / 10);
    timeLeft = centiseconds;
    updateTimeDisplay();
   }, 10);
  } else {
   timer = setInterval(() => {
    if (timeLeft > 0) {
     timeLeft--;
     updateTimeDisplay();
    } else {
     clearInterval(timer);
     beep();
    }
   }, 10);
  }
  startPauseBtn.textContent = 'Pause';
 }
 isRunning = !isRunning;
}

function resetTimer() {
 clearInterval(timer);
 isRunning = false;
 startPauseBtn.textContent = 'Start';
 if (isStopwatch) {
 elapsedTime = 0;
 timeLeft = 0;
 } else {
 timeLeft = (parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value)) * 100;
 }
 updateTimeDisplay();
}

function setTimerMode() {
 isStopwatch = false;
 timerDiv.style.display = 'block';
 settingsDiv.style.display = 'block';
 resetTimer();
}

function setStopwatchMode() {
 isStopwatch = true;
 timerDiv.style.display = 'block';
 settingsDiv.style.display = 'none';
 resetTimer();
}

minutesInput.addEventListener('change', () => {
 timeLeft = (parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value)) * 100;
 updateTimeDisplay();
});

secondsInput.addEventListener('change', () => {
 timeLeft = (parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value)) * 100;
 updateTimeDisplay();
});

startPauseBtn.addEventListener('click', startPauseTimer);
resetBtn.addEventListener('click', resetTimer);
timerBtn.addEventListener('click', setTimerMode);
stopwatchBtn.addEventListener('click', setStopwatchMode);

window.onload = () => {
 setTimerMode();
};
