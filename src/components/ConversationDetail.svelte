<script>
  import { onMount } from 'svelte';
  import { conversationSelected } from '../stores/mainstore.js';
  import { openComponentsStack } from '../stores/openComponentsStack.js';

  let storeSize;
      openComponentsStack.subscribe(value => {
          storeSize = value.length;
      });

  let isConversationSelected = false;

  conversationSelected.subscribe(value => {
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
    <div class="messages-box" class:invisible={!isConversationSelected}>
      <div class="messages">
        <!-- ... zprávy ... -->
      </div>
    </div>
    <div class="centered-message" class:invisible={isConversationSelected}>
      Please select your conversation...
    </div>
</div>

<style>
  .centered-message {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 1.5em;
    text-align: center;
  }
</style>
