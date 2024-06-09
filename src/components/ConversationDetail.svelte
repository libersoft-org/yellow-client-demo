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
				window.adjustPanels();
			}
		}
		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<style>
  
  .topic-bar {
    display: flex;
    padding: 0 20px;
    margin: 0px 0px;
    background-color: #000;
    color: #fff;
    flex-direction: row;
  }
  
  .message_topic {
    padding-right: 10px;
  }
  
  .sipka-doleva {
    padding-right: 10px;
  }
  
</style>

{#if conversationId == 3}

<div class="topic-bar">

  <div class="sipka-doleva">
    &lt; 
  </div>

  <div style="width: calc(100% - 40px);">
    <span class="message_topic">General</span>
    <span class="message_topic">Wedding</span>
    <span class="message_topic">Dog</span>
  </div>
   
   <div style="width: 40px; text-align: right;">
     &gt;
   </div>
      
</div>



{/if}

<div class="conversation-detail">
	<MessagesList visible={isConversationSelected} {conversationId} />
	<div class="centered-message" class:invisible={isConversationSelected}>
		Please select your conversation...
	</div>
</div>
