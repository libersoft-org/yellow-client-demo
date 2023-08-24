<script>
	export let classList = [];
	export let distance = 0.3;
</script>

<div class="svg-container">
	<svg
		viewBox={`0 0 ${(classList.length - 1) * 512 * distance + 512} 512`}
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		{#each [...classList].reverse() as classItem, index}
			<g
					fill="none"
					fill-rule="evenodd"
					id="Tick"
					stroke="none"
					stroke-width="1"
					transform={`translate(${(classList.length - 1 - index) * 512 * distance}, 0)`}
			>
				<g id="Group" transform="translate(9.000000, 13.000000)">
					<path
							class={classItem}
							d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32c8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4C431.6 99.13 439.8 96 448 96C465.1 96 480 109.7 480 128z"
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
	.base {
		fill: gray;
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
