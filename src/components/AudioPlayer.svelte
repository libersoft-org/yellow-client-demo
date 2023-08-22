<!-- AudioPlayer.svelte -->
<script>
    import { onMount } from 'svelte';
    import WaveSurfer from 'wavesurfer.js'
    export let audioUrl = '/audio.mp3';

    let wavesurfer;

    onMount(() => {
            wavesurfer = WaveSurfer.create({
            "container": "#waveform",
                "height": 48,
                "splitChannels": false,
                "normalize": true,
                "waveColor": "#fbd113",
                "progressColor": "#b09003",
                "cursorColor": "#622727",
                "canvasColor":"#cccccc",
                "cursorWidth": 1,
                "barWidth": 2,
                "barGap": 1,
                "barRadius": 1,
                "barHeight": 0.1,
                "barAlign": "",
                "minPxPerSec": 1,
                "fillParent": true,
                "url": audioUrl,
                "mediaControls": false,
                "autoplay": false,
                "interact": true,
                "hideScrollbar": true,
                "audioRate": 1,
                "autoScroll": true,
                "autoCenter": true,
                "sampleRate": 48000
            });

            wavesurfer.on('interaction', () => {
                wavesurfer.play();
            });
        });
</script>

<div id="waveform"></div>

<style>
    #waveform {
        height:48px;
        width:200px;
    }
</style>
