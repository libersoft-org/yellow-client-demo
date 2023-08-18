<script>
	import { onMount } from 'svelte';

	export let leftSelector = '.resizable-left';
	export let rightSelector = '.resizable-right';

	let dragging = false;
	let leftPanel;
	let rightPanel;
	let resizerElement;

	function handleMousedown(e) {
		e.preventDefault();
		dragging = true;
		document.addEventListener('mousemove', handleMousemove);
		document.addEventListener('mouseup', handleMouseup);
		document.addEventListener('touchmove', handleMousemove);
		document.addEventListener('touchend', handleMouseup);
	}

	function handleMouseup() {
		dragging = false;
		document.removeEventListener('mousemove', handleMousemove);
		document.removeEventListener('mouseup', handleMouseup);
		document.removeEventListener('touchmove', handleMousemove);
		document.removeEventListener('touchend', handleMouseup);
	}

	function handleMousemove(e) {
		e.preventDefault();
		const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;

		if (dragging && leftPanel && rightPanel) {
			const containerWidth = leftPanel.parentElement.clientWidth;
			const leftMinWidth = parseInt(getComputedStyle(leftPanel).minWidth);
			const leftMaxWidth = parseInt(getComputedStyle(leftPanel).maxWidth);

			let newLeftWidth = clientX;
			newLeftWidth = Math.max(newLeftWidth, leftMinWidth);
			newLeftWidth = Math.min(newLeftWidth, leftMaxWidth);

			const rightMinWidth = parseInt(getComputedStyle(rightPanel).minWidth);
			const rightMaxWidth = parseInt(getComputedStyle(rightPanel).maxWidth);
			let newRightWidth = containerWidth - newLeftWidth;
			newRightWidth = Math.max(newRightWidth, rightMinWidth);
			newRightWidth = Math.min(newRightWidth, rightMaxWidth);

			leftPanel.style.width = `${newLeftWidth}px`;
			rightPanel.style.width = `${newRightWidth}px`;
			resizerElement.style.left = `${newLeftWidth}px`;
		}
	}

	function handleResize() {
		updatePanelSizes();
	}

	function updatePanelSizes() {
		if (leftPanel && rightPanel) {
			const containerWidth = leftPanel.parentElement.clientWidth;
			const leftMinWidth = parseInt(getComputedStyle(leftPanel).minWidth);
			const leftMaxWidth = parseInt(getComputedStyle(leftPanel).maxWidth);
			const rightMinWidth = parseInt(getComputedStyle(rightPanel).minWidth);
			const rightMaxWidth = parseInt(getComputedStyle(rightPanel).maxWidth);

			let newLeftWidth = parseInt(getComputedStyle(leftPanel).width);
			newLeftWidth = Math.max(newLeftWidth, leftMinWidth);
			newLeftWidth = Math.min(newLeftWidth, leftMaxWidth);
			let newRightWidth = containerWidth - newLeftWidth;
			newRightWidth = Math.max(newRightWidth, rightMinWidth);
			newRightWidth = Math.min(newRightWidth, rightMaxWidth);
			leftPanel.style.width = `${newLeftWidth}px`;
			rightPanel.style.width = `${newRightWidth}px`;
			resizerElement.style.left = `${newLeftWidth}px`;
		}
	}

	onMount(() => {
		leftPanel = document.querySelector(leftSelector);
		rightPanel = document.querySelector(rightSelector);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<div bind:this={resizerElement} class="resizer" on:mousedown={handleMousedown} on:touchstart={handleMousedown} />
