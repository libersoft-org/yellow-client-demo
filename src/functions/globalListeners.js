import { onMount } from 'svelte';
import { openComponentsStack } from '../stores/openComponentsStack.js';
let storeSize;

openComponentsStack.subscribe((value) => {
	storeSize = value.length;
});

export function setupGlobalListeners() {
	if (typeof document !== 'undefined') {
		onMount(() => {
			document.addEventListener('keydown', handleEscKey, false);
			return () => {
				document.removeEventListener('keydown', handleEscKey, false);
			};
		});
	}
}

function handleEscKey(event) {
	if (event.key === 'Escape' && storeSize > 0) {
		let currentStack;
		openComponentsStack.subscribe((value) => {
			currentStack = value;
		})();
		let topComponentId = currentStack[storeSize - 1];
		if (topComponentId) {
			const updatedStack = [...currentStack];
			updatedStack.pop();
			openComponentsStack.set(updatedStack);
			document.dispatchEvent(new CustomEvent('closeToggleComponent', { detail: topComponentId }));
			event.preventDefault();
		}
	}
}

export function addGlobalListener(eventType, callback) {
	if (typeof document !== 'undefined') {
		document.addEventListener(eventType, callback, false);
	}
}

export function removeGlobalListener(eventType, callback) {
	if (typeof document !== 'undefined') {
		document.removeEventListener(eventType, callback, false);
	}
}
