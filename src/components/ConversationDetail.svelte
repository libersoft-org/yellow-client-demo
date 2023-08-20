<script>
	import { onMount } from 'svelte';
	import { conversationSelected } from '../stores/mainstore.js';
	import { openComponentsStack } from '../stores/openComponentsStack.js';
	import MessagesList from './MessagesList.svelte';

	let storeSize;
	openComponentsStack.subscribe((value) => {
		storeSize = value.length;
	});

	let isConversationSelected = false;

	conversationSelected.subscribe((value) => {
		isConversationSelected = value;
	});

	onMount(() => {
		function handleKeydown(event) {
			if (event.key === 'Escape' && storeSize == 0) {
				conversationSelected.set(false);
			}
		}
		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<div class="conversation-detail">
	<MessagesList visible={isConversationSelected} />
	<div class="centered-message" class:invisible={isConversationSelected}>
		Please select your conversation...
	</div>
</div>
