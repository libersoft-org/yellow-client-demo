import { writable } from 'svelte/store';

export const accountsIsOpen = writable(false);

export const menuOpen = writable(false);
export function toggleMenu() {
	menuOpen.update((state) => !state);
}

export const openedComponentsStack = writable([]);
export const sendMessageStore = writable(null);
export const scrollToBottomStore = writable(null);
export const activeConversationIdStore = writable(null);
export const conversationSelected = writable(false);

export const activeContactIdStore = writable(null);
export const contactSelected = writable(false);

export const activeCallIdStore = writable(null);
export const callSelected = writable(false);
export const actualMVC = writable('conversation');
