<script>
	import { onMount, onDestroy } from 'svelte';
	import { addGlobalListener, removeGlobalListener } from '../functions/globalListeners.js';
	import { openComponentsStack } from '../stores/openComponentsStack.js';

	export let id = '';
	export let modal = false;
	export let toggleClass = '';
	export let toggleElementSelector = '';
	export let targetSelector = '';
	export let closeOnEsc = true;
	export let closeOnClickOutside = true;

	export let isOpen = false;
	let prevIsOpen = isOpen;

	$: {
		if (isOpen !== prevIsOpen) {
			if (isOpen) {
				togOpen();
			} else {
				togClose();
			}
			prevIsOpen = isOpen;
		}
	}

	function togOpen() {
		document.querySelector(targetSelector).classList.add(toggleClass);

		if (closeOnEsc) {
			openComponentsStack.update((stack) => [...stack, toggleElementSelector]);
		}
	}

	function togClose() {
		document.querySelector(targetSelector).classList.remove(toggleClass);
		openComponentsStack.update((stack) => stack.filter((comp) => comp !== toggleElementSelector));
	}

	function handleOutsideClick(event) {
		if (closeOnClickOutside) {
			const targetElement = document.querySelector(targetSelector);
			const toggleElement = document.querySelector(toggleElementSelector);

			if (event.target === targetElement || toggleElement.contains(event.target)) {
				return;
			}

			if (targetElement && !targetElement.contains(event.target) && isOpen) {
				simulateToggleElementClick();
			}
		}
	}

	function handleEscKey(event) {
		let topComponentId = $openComponentsStack[$openComponentsStack.length - 1];
		if (
			topComponentId === toggleElementSelector &&
			closeOnEsc &&
			event.key === 'Escape' &&
			isOpen
		) {
			console.log('Closing component with id:', toggleElementSelector);
			simulateToggleElementClick();
			event.preventDefault();
			event.stopPropagation();
			openComponentsStack.update((stack) => stack.filter((comp) => comp !== toggleElementSelector));
		}
	}

	function simulateToggleElementClick() {
		document.querySelector(`${toggleElementSelector}`).click();
	}

	onMount(() => {
		addGlobalListener('click', handleOutsideClick);
		//    addGlobalListener('keydown', handleEscKey);
	});

	onDestroy(() => {
		removeGlobalListener('click', handleOutsideClick);
		//   removeGlobalListener('keydown', handleEscKey);
	});
</script>

<slot />
