<script>
    import MultiTick from "./MultiTick.svelte";

    export let templateType = 'video';
    export let classes = null;
    export let message = null;

    function openVideo(aid) {
        console.log();
    }
</script>

{#if message && templateType === 'video'}
    <div class="multipart-message">

        <div class="element standard-video">
            <div class="image-container video svelte" on:click={openVideo(message.id)}>
                <img src="{message.preview}" alt="Play" class="image-preview"/>
            </div>
            <div class="video-description">
                <div class="conversation__user-photo">
                    <img class="photo-circle photo-circle--big"
                         src={message.imageUrl}
                         alt={message.imageUrl}/>
                </div>
                <div class="conversation__info">
                    <div class="conversation__info__user-name">{message.name}</div>
                    <div class="conversation__info__user-email">{message.channel}</div>
                </div>
                <div class="conversation__status">
                    <div class="conversation__status__date-time">
                        <div class="horus-eye-icon">
                            <img src="img/icons/icon_horus.svg">
                            {message.views}
                        </div>
                        <div class="conversation__status__icons">
                            <div class="icon-like">
                                <img src="img/icons/icon_like.svg">
                                {message.like}
                            </div>
                            <div class="icon-like">
                                <img src="img/icons/icon_dislike.svg">
                                {message.dislike}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
{:else if templateType === 'live' }
    <div class="multipart-message">

        <div class="element videolive">
            <div class="image-container video svelte" on:click={openVideo(message.id)}>
                <div class="float-live"><img src="img/icons/icon_live_stream.png"></div>
                <img src="{message.preview}" alt="Play" class="image-preview"/>
            </div>
            <div class="video-description">
                <div class="conversation__user-photo">
                    <img class="photo-circle photo-circle--big"
                         src={message.imageUrl}
                         alt={message.imageUrl}/>
                </div>
                <div class="conversation__info">
                    <div class="conversation__info__user-name">{message.name}</div>
                    <div class="conversation__info__user-email">{message.channel}</div>
                </div>
                <div class="conversation__status">
                    <div class="conversation__status__date-time">
                        <div class="horus-eye-icon">
                            <img src="img/icons/icon_horus.svg">
                            {message.views}
                        </div>
                        <div class="conversation__status__icons">
                            <div class="icon-like">
                                <img src="img/icons/icon_like.svg">
                                {message.like}
                            </div>
                            <div class="icon-like">
                                <img src="img/icons/icon_dislike.svg">
                                {message.dislike}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
{:else if templateType === 'reel'}
    <div class="multipart-message">

        <div class="element videoreels">
            <div class="image-container video svelte" on:click={openVideo(message.id)}>
                <div class="float-live"><img src="img/icons/icon_live_stream.svg"></div>
                <img src="{message.preview}" alt="Play" class="image-preview"/>

            </div>
            <div class="video-description">

                <div class="conversation__user-photo">
                    <img
                            class="photo-circle photo-circle--small"
                            src={message.imageUrl}
                            alt={message.imageUrl}
                    />
                </div>
                <div class="conversation__info">
                    <div class="conversation__info__user-name">{message.name}</div>
                    <div class="conversation__info__user-email">{message.channel}</div>
                </div>
                <div class="conversation__status">
                    <div class="conversation__status__date-time">
                        <div class="horus-eye-icon"><img src="img/icons/icon_horus.svg">message.views</div>
                        <div class="conversation__status__icons">
                            <div class="icon-like"><img src="img/icons/icon_like.svg">message.like</div>
                            <div class="icon-like"><img src="img/icons/icon_dislike.svg">message.dislike</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .float-live {
        position: relative;
        right: 0%;
        top: 0;
        width: 72px;
        height: 40px;
        display: flex;
        margin: 0 0 0 auto;
        z-index: 10;
        background-color: rgba(0,0,0,0.7);
        padding: 0 0 8px 8px;
        border-radius: 5px;

    }

    .image-container.video {
        width: 320px;
        height: 180px;
        margin-top: 12px;
        margin-bottom: 4px;
    }
    .image-preview {
        top: -40px;
        position: relative;
    }
    .video-description {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
    }

    .conversation__user-photo img {
        width: 28px;
        height: 28px;
        overflow: hidden;
    }

    .conversation__user-photo {
        width: 32px;
        height: 32px;
        overflow: hidden;
    }

    .conversation__status {
        width: 120px;
        height: 64px;

    }

    .conversation__status__date-time {
        display: flex;
        align-items: self-end;
        flex-direction: column;
        margin-right: 5px;
    }

    .conversation__info__user-name {
        font-weight: bold;

    }

    .conversation__info__user-email {
        font-size: 1em;
    }

    .conversation__status {
        font-size: 1em;
    }

    .horus-eye-icon {
        width: auto;
        font-size: 1em;
        fon-wight: bold;
        display: flex;


    }

    .conversation__status__icons {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .horus-eye-icon img {
        width: 24px;
        height: 24px;
    }

    .icon-like img {
        width: 20px;
        height: 20px; /* Přizpůsobte vzdálenost ikony od textu */
    }

    .icon-like {
        width: 55px;
        height: 32px;
        text-align: end;
    }

    .icon-like span {
        height: 100%;
    }

    .multipart-message .element .conversation__info {
        margin: 0px 0px 0px 2px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
</style>