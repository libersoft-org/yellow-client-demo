<script>

    import {onMount} from "svelte";


    export let id;


    let currentInstrument = 'piano';
    let keys = [];
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
                oscillator.type = 'square';
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(2500, audioContext.currentTime);
                break;
        }
        oscillator.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioContext.destination);
        return {oscillator, gainNode};
    }

    function startSound(key) {
        if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const note = key.dataset.note;
        const frequency = notes[note];
        const {oscillator, gainNode} = createInstrumentSound(frequency);
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + 0.01);
        oscillator.start();
        activeNodes[key.dataset.key] = {oscillator, gainNode};
    }

    function stopSound(key) {
        const nodeData = activeNodes[key.dataset.key];
        if (nodeData) {
            const {oscillator, gainNode} = nodeData;
            gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.5);
            oscillator.stop(audioContext.currentTime + 0.5);
            delete activeNodes[key.dataset.key];
        }
    }

    function setInstrument(name) {
        const elInstruments = document.getElementsByClassName('instrument');
        for (let el of elInstruments) {
            el.classList.remove('active');
            if (el.classList.contains(name)) el.classList.add('active');
        }
        currentInstrument = name;
    }


    onMount(() => {

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

        keys = document.querySelectorAll('.key');


        keys.forEach(key => {
            key.addEventListener('mousedown', () => startSound(key));
            key.addEventListener('mouseup', () => stopSound(key));
            key.addEventListener('mouseleave', () => stopSound(key));
        });


    });


</script>

<style>

    .controls {
        margin-bottom: 20px;
        font-size: 20px;
    }

    .keyboard {
        display: flex;
        background-color: #222;
        padding: 20px;
        border-radius: 20px;
    }

    .key {
        width: 40px;
        height: 150px;
        margin: 2px;
        background-color: white;
        border: 1px solid black;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        font-size: 26px;
        font-weight: bold;
        border-radius: 10px;
    }

    .key:active,
    .key.active {
        background-color: #ccc;
    }

    .instrument {
        padding: 10px;
        font-size: 30px;
        width: 60px;
        height: 60px;
        border: 1px solid #000;
        border-radius: 10px;
        background-color: #FFF;
        cursor: pointer;
    }

    .instrument.active {
        background-color: #222;
    }

</style>
<b>piano</b>
<div class="controls">
  <button class="instrument piano active" on:click={() => setInstrument('piano')}>🎹</button>
  <button class="instrument guitar" on:click={() => setInstrument('guitar')}>🎸</button>
  <button class="instrument violin" on:click={() => setInstrument('violin')}>🎻</button>
  <button class="instrument oscilator" on:click={() => setInstrument('oscilator')}>↝</button>
</div>
<div class="keyboard">
  <div class="key" data-note="C" data-key="A">A</div>
  <div class="key" data-note="D" data-key="S">S</div>
  <div class="key" data-note="E" data-key="D">D</div>
  <div class="key" data-note="F" data-key="F">F</div>
  <div class="key" data-note="G" data-key="G">G</div>
  <div class="key" data-note="A" data-key="H">H</div>
  <div class="key" data-note="B" data-key="J">J</div>
</div>

