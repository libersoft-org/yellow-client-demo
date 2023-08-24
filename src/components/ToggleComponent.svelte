<script>
	import { onMount, onDestroy } from 'svelte';
	import { addGlobalListener, removeGlobalListener } from '../functions/globalListeners.js';
	import { openComponentsStack } from '../stores/openComponentsStack.js';

	export let id = '';
	export let modal = false;
	export let toggleClass = '';
	export let toggleElementSelector = '';
	export let targetSelector = '';
	export let closeOnEsc = false;
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
		targetSelector.forEach((selector) => {
			console.log('tog-open');
			const element = document.querySelector(selector);
			if (element) {
				console.log('tog add');
				element.classList.add(toggleClass);
			}
		});

		if (closeOnEsc) {
			openComponentsStack.update((stack) => [...stack, toggleElementSelector]);
		}
	}

	function togClose() {
		console.log('tog-close');
		targetSelector.forEach((selector) => {
			const element = document.querySelector(selector);
			if (element) {
				console.log('tog rem');
				element.classList.remove(toggleClass);
			}
		});
		openComponentsStack.update((stack) => stack.filter((comp) => comp !== toggleElementSelector));
	}

	function handleOutsideClick(event) {
		console.log('handel');
		if (closeOnClickOutside) {
			let clickedOutsideAllTargets = true;

			targetSelector.forEach((selector) => {
				const targetElement = document.querySelector(selector);
				if (
					targetElement &&
					(event.target === targetElement || targetElement.contains(event.target))
				) {
					clickedOutsideAllTargets = false;
				}
			});

			const toggleElement = document.querySelector(toggleElementSelector);
			if (toggleElement && toggleElement.contains(event.target)) {
				clickedOutsideAllTargets = false;
			}

			if (clickedOutsideAllTargets && isOpen) {
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
