<script>
    import { onMount } from 'svelte';
    import { contactSelected } from '../stores/mainstore.js';
    import { openComponentsStack } from '../stores/openComponentsStack.js';
    import MessagesList from './MessagesList.svelte';
    import { activeContactIdStore } from '../stores/mainstore.js';
    import ProfileDetail from "./ProfileDetail.svelte";
    let visible = true;
    let storeSize;
    openComponentsStack.subscribe((value) => {
        storeSize = value.length;
    });

    let isContactSelected = false;
    let contactId;

    contactSelected.subscribe((value) => {
        isContactSelected = value;
    });

    activeContactIdStore.subscribe((value) => {
        contactId = value;
    });
    onMount(() => {
        function handleKeydown(event) {
            if (event.key === 'Escape' && storeSize == 0) {
                contactSelected.set(false);
                activeContactIdStore.set(null);
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

<div class="conversation-detail">
    {#if isContactSelected}
        <ProfileDetail visible={isContactSelected} {contactId} />
    {:else}
        <div class="centered-message" class:invisible={isContactSelected}>
        Please select your contact...
    </div>
    {/if}
</div>
