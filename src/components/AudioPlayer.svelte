<script>
	import { onMount } from 'svelte';
	import WaveSurfer from 'wavesurfer.js';
	export let audioUrl = '/audio.mp3';

	let wavesurfer;
	let isPlaying = false;

	function formatTime(seconds) {
		const minutes = Math.floor(seconds / 60);
		seconds = Math.floor(seconds % 60);
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	}

	onMount(() => {
		wavesurfer = WaveSurfer.create({
			container: '#waveform',
			height: 24,
			splitChannels: false,
			normalize: true,
			waveColor: '#fbd113',
			progressColor: '#6699ff',
			cursorColor: '#3366cc',
			canvasColor: 'transparent',
			cursorWidth: 1,
			barWidth: 2,
			barGap: 1,
			barRadius: 1,
			barHeight: 0.1,
			barAlign: '',
			minPxPerSec: 1,
			fillParent: true,
			url: audioUrl,
			mediaControls: true,
			autoplay: false,
			interact: true,
			hideScrollbar: true,
			audioRate: 1,
			autoScroll: true,
			autoCenter: true,
			sampleRate: 48000
		});

		const timeEl = document.querySelector('#time');
		const durationEl = document.querySelector('#duration');
		wavesurfer.on('decode', (duration) => (durationEl.textContent = formatTime(duration)));
		wavesurfer.on('timeupdate', (currentTime) => (timeEl.textContent = formatTime(currentTime)));
		wavesurfer.on('interaction', () => {
			wavesurfer.play();
		});
	});

	function togglePlay() {
		wavesurfer.playPause();
		isPlaying = !isPlaying;
	}
</script>

<div style="display: flex; align-items: start;">
	<img
		src={isPlaying ? '../img/icons/icn_pause.svg' : '../img/icons/icn_play.svg'}
		alt="Play/Pause"
		on:click={togglePlay}
	/>
	<div>
		<div id="waveform" />
		<div><span id="time">0:00</span> / <span id="duration">0:00</span></div>
	</div>
</div>

<style>
	#waveform {
		height: 24px;
		width: 200px;
		font-size: 0.8rem;
	}
	img {
		height: 48px; /* Výška odpovídá výšce waveformu a textu dohromady */
		cursor: pointer;
		margin-right: 10px;
	}
</style>
