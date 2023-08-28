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
    <div class="contact-info">
        <div class="conversation__info__user-name">{contact.name}</div>
        <div class="conversation__info__user-email">{contact.email}</div>
    </div>
</div>
<style>
    .contact-info {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: flex-start;
        padding: 0px 10px;
        -webkit-box-flex: 3;
        -ms-flex-positive: 3;
        flex-grow: 3;
        -ms-flex-negative: 1;
        flex-shrink: 1;
        -ms-flex-preferred-size: 0%;
        flex-basis: 0%;
        overflow: hidden;
    }
    .conversation__info__user-name {
        font-weight: bold;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .conversation__info__user-email {
        font-size: 0.8rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-bottom: 8px;
        font-weight: normal ;
    }
</style>
