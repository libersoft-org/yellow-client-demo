<!-- Modal.svelte -->
<script>
	import { createEventDispatcher } from 'svelte';

	export let title = 'Modal Title'; // Defaultní název
	const dispatch = createEventDispatcher();

	function handleClose() {
		dispatch('close');
	}
</script>

<div class="modal">
	<div class="modal-header">
		<div class="modal-title">{title}</div>
		<div class="close-icon" on:click={handleClose} />
	</div>
	<div class="modal-body"><slot /></div>
</div>
