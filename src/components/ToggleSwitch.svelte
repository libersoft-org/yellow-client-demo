<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let checked = false;

	function handleChange(event) {
		event.preventDefault();
		checked = !checked;
		dispatch('checked', { checked });
	}
</script>

<div class="toggle-container">
	<div class="toggle-switch" on:click={handleChange} on:keypress={handleChange}>
		<input type="checkbox" {checked} />
		<span class="slider" />
	</div>
</div>
