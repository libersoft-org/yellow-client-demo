<script>
    import MultiTick from './MultiTick.svelte';

    export let contact;
    export let isActive = false;
    export let onSelect = () => {};
</script>

<div class="conversation {isActive ? 'active' : ''}" on:click={onSelect}>
    {#if contact.imageUrl2}
        <div class="conversation__user-photo">
            <img
                    class="photo-circle photo-circle--small"
                    src={contact.imageUrl}
                    alt={contact.imageUrl}
            />
            <img
                    class="photo-circle photo-circle--small photo-circle-grouped"
                    src={contact.imageUrl2}
                    alt={contact.imageUrl2}
            />
        </div>
    {:else}
        <div class="conversation__user-photo">
            <img
                    class="photo-circle photo-circle--big"
                    src={contact.imageUrl}
                    alt={contact.imageUrl}
            />
        </div>
    {/if}
    <div class="conversation__info">
        <div class="conversation__info__user-name">{contact.name}</div>
        <div class="conversation__info__user-email">{contact.email}</div>
    </div>
</div>
