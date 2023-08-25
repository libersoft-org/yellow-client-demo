<script>
	import { onMount, tick } from 'svelte';
	export let target; // cílový prvek, na který se má simulovat kliknutí
	export let swipeable; //prvek pro swipe
	export let swipeableAmount = 0;
	export let swipeabletype ='';
	let startX;
	let currentX;
	let isDragging = false;
	let mydiv;

	function handleStart(event) {
		startX = event.touches ? event.touches[0].pageX : event.pageX;
		isDragging = true;
		event.stopPropagation();
		document.addEventListener('mouseup', handleEnd);
		document.addEventListener('touchend', handleEnd);
	}

	function handleMove(event) {
		if (!isDragging) return;
		currentX = event.touches ? event.touches[0].pageX : event.pageX;
		const distanceX = currentX - startX;
		if (distanceX < 0) {
			let swipes =  parseInt(distanceX);
			document.querySelector(swipeable).style.transform = `translateX(${swipes}px)`;
		}
		event.stopPropagation();
	}

	function handleEnd(event) {
		isDragging = false;
		const distanceX = currentX - startX;
		startX = null;
		// Pokud je posun větší než např. 100px, simulujeme kliknutí na cílový prvek
		if (distanceX < -parseFloat(getComputedStyle(mydiv.parentElement).width) / 2) {
			const targetElement = document.querySelector(target);
			if (targetElement) {
				targetElement.click();
				setTimeout(() => {document.querySelector(swipeable).style.transform = ""},500);
			}
		} else {
			setTimeout(() => {document.querySelector(swipeable).style.transform = ""},0);
		}

		document.removeEventListener('touchend', handleEnd);
		document.removeEventListener('mouseup', handleEnd);


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
