<script>
	import { onMount } from 'svelte';
	import { conversationSelected } from '../stores/mainstore.js';
	import { openComponentsStack } from '../stores/openComponentsStack.js';
	import MessagesList from './MessagesList.svelte';
	import { activeConversationIdStore } from '../stores/mainstore.js';

	let storeSize;
	openComponentsStack.subscribe((value) => {
		storeSize = value.length;
	});

	let isConversationSelected = false;
	let conversationId;

	conversationSelected.subscribe((value) => {
		isConversationSelected = value;
	});

	activeConversationIdStore.subscribe((value) => {
		conversationId = value;
	});
	onMount(() => {
		function handleKeydown(event) {
			if (event.key === 'Escape' && storeSize == 0) {
				conversationSelected.set(false);
				activeConversationIdStore.set(null);
				document.querySelector(`.panel-left`).classList.add('active-panel');
				document.querySelector(`.panel-right`).classList.remove('active-panel');
			}
		}
		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<div class="conversation-detail">
	<MessagesList visible={isConversationSelected} conversationId={conversationId} />
	<div class="centered-message" class:invisible={isConversationSelected}>
		Please select your conversation...
	</div>
</div>
