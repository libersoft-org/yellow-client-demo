<script>
	export let classList = [];
	export let distance = 0.3;
</script>

<div class="svg-container">
	<svg
		viewBox={`0 0 ${(classList.length - 1) * 64 * distance + 64} 64`}
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		{#each classList as classItem, index}
			<g
				fill="none"
				fill-rule="evenodd"
				id="Tick"
				stroke="none"
				stroke-width="1"
				transform={`translate(${index * 64 * distance}, 0)`}
			>
				<g id="Group" transform="translate(9.000000, 13.000000)">
					<path
						class={classItem}
						d="M12.5900974,34.4099026 C13.5664082,35.3862133 15.1493206,35.3862133 16.1256313,34.4099026 L44.4099026,6.12563133 C45.3862133,5.1493206 45.3862133,3.56640815 44.4099026,2.59009742 C43.4335918,1.61378669 41.8506794,1.61378669 40.8743687,2.59009742 L12.5900974,30.8743687 C11.6137867,31.8506794 11.6137867,33.4335918 12.5900974,34.4099026 Z"
						id="Rectangle"
					/>
					<path
						class={classItem}
						d="M1.42893219,19.9289322 C2.40524292,18.9526215 3.98815536,18.9526215 4.96446609,19.9289322 L15.5710678,30.5355339 C16.5473785,31.5118446 16.5473785,33.0947571 15.5710678,34.0710678 C14.5947571,35.0473785 13.0118446,35.0473785 12.0355339,34.0710678 L1.42893219,23.4644661 C0.452621459,22.4881554 0.452621459,20.9052429 1.42893219,19.9289322 Z"
						id="Rectangle"
					/>
				</g>
			</g>
		{/each}
	</svg>
</div>

<style>
	/* Příklad tříd pro SVG ikony */
	.sent {
		fill: var(--secondary-color);
	}
	.readed {
		fill: var(--primary-color);
	}
	.done {
		fill: limegreen;
	}

	.svg-container {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.svg-container svg {
		max-width: 100%;
		max-height: 100%;
		width: 100%;
		height: 100%;
	}
</style>
