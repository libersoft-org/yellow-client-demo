<script>
	import { onMount, tick } from 'svelte';
	export let target; // cílový prvek, na který se má simulovat kliknutí
	export let swipeable; //prvek pro swipe
	export let swipeableAmount = 0;
	let startX;
	let currentX;
	let isDragging = false;
	let mydiv;

	function handleStart(event) {
		startX = event.touches ? event.touches[0].pageX : event.pageX;
		isDragging = true;
		event.stopPropagation();
	}

	function handleMove(event) {
		if (!isDragging) return;
		currentX = event.touches ? event.touches[0].pageX : event.pageX;
		const distanceX = currentX - startX;
		console.log(distanceX);
		// Posun zprava doleva
		if (distanceX < 0) {
			let swipes = parseInt(swipeableAmount) + parseInt(distanceX);
			document.querySelector(swipeable).style.transform = `translateX(${swipes}px)`;
		}
		event.stopPropagation();
	}

	function handleEnd(event) {
		isDragging = false;
		const distanceX = currentX - startX;
		console.log(distanceX + ':' + parseFloat(getComputedStyle(mydiv.parentElement).width) / 2);
		startX = null;
		// Pokud je posun větší než např. 100px, simulujeme kliknutí na cílový prvek
		if (distanceX < -parseFloat(getComputedStyle(mydiv.parentElement).width) / 2) {
			const targetElement = document.querySelector(target);
			if (targetElement) {
				// console.log("Simutated click on:"+targetElement.id);
				targetElement.click();
			}
		}

		document.querySelector(swipeable).style.transform = '';
		event.stopPropagation();
	}

	function handleClick(event) {
		event.stopPropagation();
	}

	// Přidání posluchačů událostí pro rodičovský element
	onMount(() => {
		const parentElement = mydiv.parentElement;
		parentElement.addEventListener('mousedown', handleStart);
		parentElement.addEventListener('mousemove', handleMove);
		//parentElement.addEventListener('mouseup', handleEnd);
		document.addEventListener('mouseup', handleEnd);
		parentElement.addEventListener('touchstart', handleStart);
		parentElement.addEventListener('touchmove', handleMove);
		//parentElement.addEventListener('touchend', handleEnd);
		document.addEventListener('touchend', handleEnd);
	});
</script>

<div bind:this={mydiv}>
	<slot />
</div>
