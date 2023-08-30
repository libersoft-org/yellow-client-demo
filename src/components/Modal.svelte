<!-- Modal.svelte -->
<script>
	import { onMount, createEventDispatcher } from 'svelte';

	export let title = 'Modal Title'; // Defaultní název
	const dispatch = createEventDispatcher();
	export let modal; // Exportujte proměnnou modal
	export let overlay = false;
	export let classes = null;
	export let styles = null;
	export let resizeable = false;

	let modalr;
	let isDragging = false;
	let offsetX, offsetY;
	function handleKeydown(event) {
		// ... (vaše stávající kód)
		if (event.target.getAttribute('contenteditable') !== 'true') {
			return;
		}
		// Pokud je stisknuta klávesa Enter (s nebo bez klávesy Shift), vložte dva <br> elementy
		if (event.key === 'Enter') {
			event.preventDefault();
			const selection = window.getSelection();
			const range = selection.getRangeAt(0);
			range.deleteContents();

			const br1 = document.createElement('br');
			const br2 = document.createElement('br');

			range.insertNode(br1);
			range.insertNode(br2);

			range.setStartAfter(br2);
			range.setEndAfter(br2);

			selection.removeAllRanges();
			selection.addRange(range);
		}
	}
	function handleOverlayClick(event) {
		// Kontrola, zda bylo kliknuto mimo oblast modálního okna
		if (event.target === modalr) {
			handleClose();
		}
	}
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
		setTimeout(()=> {
			modalr.style.left = (window.innerWidth - modalr.offsetWidth) / 2 + 'px';
			modalr.style.top = (window.innerHeight - modalr.offsetHeight) / 2 + 'px';

			// Pokud jsou definovány vlastní styly, přidejte je k hlavnímu divu
			console.log("XXXX");
			console.log("SX:" + styles);
		}, 10);
	});
	function handleClose() {
		console.log('sin1');
		dispatch('close');
	}
	function closeModal() {
		console.log('sin2');

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

	function handleOutsideClick(event) {
		// Kontrola, zda bylo kliknuto mimo oblast modálního okna
		if (event.target.classList.contains('overlay')) {
			handleClose();
		}
	}
</script>

<div class="overlay" on:click={handleOutsideClick} />
{#if !overlay}
	<div class="modal {classes}" bind:this={modalr}>
		<div class="modal-header" on:mousedown={handleMouseDown}>
			<div class="modal-title">{title}</div>
			<div class="close-icon" on:click={handleClose} />
		</div>
		<div class="modal-body" on:keydown={handleKeydown}><slot></slot></div>
		{#if resizeable}<div class="resize-handle" on:mousedown={handleResizeMouseDown} /> {/if}
	</div>
{:else}
	<div class="modal-o {classes}" bind:this={modalr}>
		<div class="close-icon-o" on:click={handleClose} />
		<div class="modal-body-o"><slot /></div>
	</div>
{/if}
