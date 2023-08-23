<!-- Modal.svelte -->
<script>
	import { onMount, createEventDispatcher } from 'svelte';

	export let title = 'Modal Title'; // Defaultní název
	const dispatch = createEventDispatcher();
	export let modal; // Exportujte proměnnou modal

	let modalr;
	let isDragging = false;
	let offsetX, offsetY;

	function handleMouseDown(event) {
		isDragging = true;
		offsetX = event.clientX - modalr.getBoundingClientRect().left;
		offsetY = event.clientY - modalr.getBoundingClientRect().top;
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
	}

	function handleMouseMove(event) {
		if (!isDragging) return;
		let x = event.clientX - offsetX;
		let y = event.clientY - offsetY;

		// Ensure the modal doesn't go outside the viewport
		x = Math.min(window.innerWidth - modalr.offsetWidth, Math.max(0, x));
		y = Math.min(window.innerHeight - modalr.offsetHeight, Math.max(0, y));

		modalr.style.left = x + 'px';
		modalr.style.top = y + 'px';
	}

	function handleMouseUp() {
		isDragging = false;
		document.removeEventListener('mousemove', handleMouseMove);
		document.removeEventListener('mouseup', handleMouseUp);
	}

	onMount(() => {
		modalr.style.left = (window.innerWidth - modalr.offsetWidth) / 2 + 'px';
		modalr.style.top = (window.innerHeight - modalr.offsetHeight) / 2 + 'px';
	});
	function handleClose() {
		dispatch('close');
	}
	function closeModal() {
		dispatch('close');
	}
	let isResizing = false;
	let startX, startY, startWidth, startHeight;

	function handleResizeMouseDown(event) {
		isResizing = true;
		startX = event.clientX;
		startY = event.clientY;
		startWidth = modalr.offsetWidth;
		startHeight = modalr.offsetHeight;
		document.addEventListener('mousemove', handleResizeMouseMove);
		document.addEventListener('mouseup', handleResizeMouseUp);
	}

	function handleResizeMouseMove(event) {
		if (!isResizing) return;
		const dx = event.clientX - startX;
		const dy = event.clientY - startY;

		const newWidth = startWidth + dx;
		const newHeight = startHeight + dy;

		modalr.style.width = Math.min(window.innerWidth, newWidth) + 'px';
		modalr.style.height = Math.min(window.innerHeight, newHeight) + 'px';
	}

	function handleResizeMouseUp() {
		isResizing = false;
		document.removeEventListener('mousemove', handleResizeMouseMove);
		document.removeEventListener('mouseup', handleResizeMouseUp);
	}

	// Po vytvoření komponenty nastavte modal na aktuální instanci
	onMount(() => {
		modal = {
			closeModal
		};
	});
</script>

<div class="overlay" />
<div class="modal" bind:this={modalr}>
	<div class="modal-header" on:mousedown={handleMouseDown}>
		<div class="modal-title">{title}</div>
		<div class="close-icon" on:click={handleClose} />
	</div>
	<div class="modal-body"><slot /></div>
	<div class="resize-handle" on:mousedown={handleResizeMouseDown} />
</div>
