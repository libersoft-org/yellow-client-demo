<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let mapElement;
	let map;

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');

			map = leaflet.map(mapElement).setView([51.505, -0.09], 16);
			var myIcon = leaflet.icon({
				iconUrl: '../content/marker.svg',
				iconSize: [32,32],
				iconAnchor: [22, 94],
				popupAnchor: [-3, -76],
				shadowUrl: 'my-icon-shadow.png',
				shadowSize: [68, 95],
				shadowAnchor: [22, 94]
			});

			leaflet
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
					icon: myIcon
				})
				.addTo(map);

			leaflet.marker([51.505, -0.09]).addTo(map).bindPopup('Hi there!').openPopup();
		}
	});

	onDestroy(async () => {
		if (map) {
			map.remove();
		}
	});
</script>

<main>
	<div bind:this={mapElement} />
</main>

<style>
	@import 'leaflet/dist/leaflet.css';
	main div {
		height: 250px;
	}
</style>
