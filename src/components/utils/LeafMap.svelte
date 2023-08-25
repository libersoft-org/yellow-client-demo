<script>
	import { onMount } from 'svelte';
	import 'ol/ol.css';
	import { Map, View } from 'ol';
	import TileLayer from 'ol/layer/Tile';
	import OSM from 'ol/source/OSM';
	import Overlay from 'ol/Overlay';
	import { fromLonLat } from 'ol/proj';

	export let longitude = -0.09;
	export let latitude = 51.505;
	export let zoom = 16;

	let mapElement;

	onMount(() => {
		const map = new Map({
			target: mapElement,
			layers: [
				new TileLayer({
					source: new OSM()
				})
			],
			view: new View({
				center: fromLonLat([longitude, latitude]),
				zoom: zoom
			})
		});

		const markerElement = document.createElement('img');
		markerElement.src = '/img/icons/marker2.svg';
		markerElement.style.width = '32px';
		markerElement.style.height = '32px';

		const marker = new Overlay({
			position: fromLonLat([longitude, latitude]),
			positioning: 'center-center',
			element: markerElement,
			stopEvent: false
		});
		map.addOverlay(marker);
	});
</script>

<style>
	.mapContainer {
		width: 250px;
		height: 250px;
	}
</style>

<div class="mapContainer" bind:this={mapElement}></div>
