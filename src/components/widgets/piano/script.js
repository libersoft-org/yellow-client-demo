let currentInstrument = 'piano';

function setInstrument(name) {
 const elInstruments = document.getElementsByClassName('instrument');
 for (let el of elInstruments) {
  el.classList.remove('active');
  if (el.classList.contains(name)) el.classList.add('active');
 }
 currentInstrument = name;
}

document.addEventListener('DOMContentLoaded', () => {
 const keys = document.querySelectorAll('.key');
 let audioContext;
 const notes = {
  'C': 261.63,
  'D': 293.66,
  'E': 329.63,
  'F': 349.23,
  'G': 392.00,
  'A': 440.00,
  'B': 493.88
 };
 const activeNodes = {};
 keys.forEach(key => {
  key.addEventListener('mousedown', () => startSound(key));
  key.addEventListener('mouseup', () => stopSound(key));
  key.addEventListener('mouseleave', () => stopSound(key));
 });

 document.addEventListener('keydown', (event) => {
  const key = [...keys].find(k => k.dataset.key === event.key.toUpperCase());
  if (key && !activeNodes[event.key.toUpperCase()]) {
   startSound(key);
   key.classList.add('active');
  }
 });

 document.addEventListener('keyup', (event) => {
  const key = [...keys].find(k => k.dataset.key === event.key.toUpperCase());
  if (key) {
   stopSound(key);
   key.classList.remove('active');
  }
 });

 function createInstrumentSound(frequency) {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  switch (currentInstrument) {
   case 'piano':
    oscillator.type = 'sine';
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(3000, audioContext.currentTime);
    break;
   case 'guitar':
    oscillator.type = 'sawtooth';
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1000, audioContext.currentTime);
    break;
   case 'violin':
    oscillator.type = 'triangle';
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(500, audioContext.currentTime);
    break;
   case 'oscilator':
    oscillator.type = 'sine';
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1500, audioContext.currentTime);
    break;
  }
  oscillator.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(audioContext.destination);
  return { oscillator, gainNode };
 }

 function startSound(key) {
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const note = key.dataset.note;
  const frequency = notes[note];
  const { oscillator, gainNode } = createInstrumentSound(frequency);
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + 0.01);
  oscillator.start();
  activeNodes[key.dataset.key] = { oscillator, gainNode };
 }

 function stopSound(key) {
  const nodeData = activeNodes[key.dataset.key];
  if (nodeData) {
   const { oscillator, gainNode } = nodeData;
   gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.5);
   oscillator.stop(audioContext.currentTime + 0.5);
   delete activeNodes[key.dataset.key];
  }
 }
});
