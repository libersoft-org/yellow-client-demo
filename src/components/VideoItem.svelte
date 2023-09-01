<script>
    import MultiTick from './MultiTick.svelte';

    export let video;
    export let isActive = false;
    export let onSelect = () => {};
</script>

<div class="conversation {isActive ? 'active' : ''}" on:click={onSelect}>
    {#if video.imageUrl2}
        <div class="conversation__user-photo">
            <img
                    class="photo-circle photo-circle--small"
                    src={video.imageUrl}
                    alt={video.imageUrl}
            />
            <img
                    class="photo-circle photo-circle--small photo-circle-grouped"
                    src={video.imageUrl2}
                    alt={video.imageUrl2}
            />
        </div>
    {:else}
        <div class="conversation__user-photo">
            <img
                    class="photo-circle photo-circle--big"
                    src={video.imageUrl}
                    alt={video.imageUrl}
            />
        </div>
    {/if}
    <div class="conversation__info">
        <div class="conversation__info__user-name">{video.name}</div>
        <div class="conversation__info__user-email">{video.email}</div>
    </div>
    <div class="conversation__status">
        <!-- <div class="conversation__status__date-time">12:59:59</div> -->
        <div class="conversation__status__icons">
            <!--<div class="ticks"><img class="arrow-icon" src="./img/icons/icon_ld_arrow_r_out.svg"/></div> -->
            <div class="conversation__status__icons__unread-messages">{video.unreadMessages}</div>
            <!--<div
                class="conversation__status__icons__read-state conversation__status__icons__read-state--unread"
            />-->
        </div>
    </div>
</div>
<style>
    .arrow-icon {
        width:100%;
        height:100%;
        margin-left:2px;
    }

</style>