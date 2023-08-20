import { writable } from 'svelte/store';

// Vytvoření writable store s prázdným polem jako výchozí hodnotou
export const openComponentsStack = writable([]);
