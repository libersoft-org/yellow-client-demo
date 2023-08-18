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
	}

	function handleMouseup() {
		dragging = false;
		document.removeEventListener('mousemove', handleMousemove);
		document.removeEventListener('mouseup', handleMouseup);
	}

	function updatePanelSizes() {
		if (leftPanel && rightPanel) {
			const containerWidth = leftPanel.parentElement.clientWidth;
			const leftWidth = parseInt(getComputedStyle(leftPanel).width);
			const rightWidth = containerWidth - leftWidth;

			leftPanel.style.width = `${leftWidth}px`;
			rightPanel.style.width = `${rightWidth}px`;

			resizerElement.style.left = `${leftWidth}px`;
		}
	}

	function handleMousemove(e) {
		e.preventDefault();
		if (dragging && leftPanel && rightPanel) {
			const containerWidth = leftPanel.parentElement.clientWidth;
			const leftMinWidth = parseInt(getComputedStyle(leftPanel).minWidth);
			const leftMaxWidth = parseInt(getComputedStyle(leftPanel).maxWidth);
			const rightMinWidth = parseInt(getComputedStyle(rightPanel).minWidth);
			const rightMaxWidth = parseInt(getComputedStyle(rightPanel).maxWidth);

			let newLeftWidth = e.clientX;
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

	function handleResize() {
		updatePanelSizes();
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

<div bind:this={resizerElement} class="resizer" on:mousedown={handleMousedown} />
