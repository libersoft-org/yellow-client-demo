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
    <div class="multipart-message s-BTGIt7ri9Tsr">
        <svg xmlns="http://www.w3.org/2000/svg" class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr"
             width="320" transform="scale(1)" height="238">
            <foreignObject class="videoprev s-BTGIt7ri9Tsr" y="8" x="4" width="310" height="174">
                <div xmlns="http://www.w3.org/1999/xhtml"
                     style="width: 100%; height:100%; border-radius: 10px; overflow: hidden;" class="s-BTGIt7ri9Tsr">
                    <img src="{message.preview}" style="width: 100%;object-fit: cover;height: 100%;" alt="Image"
                         class="s-BTGIt7ri9Tsr"></div>
            </foreignObject>
            <g class="s-BTGIt7ri9Tsr" transform="translate(0,-30)">
                <foreignObject x="4" y="222" width="40" height="40">
                    <div class="photo-circle photo-circle--small"><img src="{message.imageUrl}"/></div>
                </foreignObject>
                <text class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr" dominant-baseline="middle"
                      fill="black" font-size="16" font-weight="bold" x="50" y="234">{message.channel}
                </text>
                <text font-size="14" fill="black" class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr"
                      x="50" y="258">{message.name}
                </text>
                




                <g text-anchor="end" class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr" transform="translate(312)">
                    <image height="16" xlink:href="img/icons_new/views_noback.svg"
                           class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr"
                           y="225" text-anchor="end" width="32" x="-108"></image>
                    <text font-size="14" fill="black"
                          class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr"
                          y="238" width="200" x="0">{message.views} views
                    </text>
                    <image class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr" width="18"
                           height="18" xlink:href="img/icons_new/like_noback.svg" y="244" x="-100"></image>


                  {#if message.price}
                    <rect x="-75" y="193" width="79" height="20" rx="8" ry="4" fill="#ff0000"></rect>
                    <text font-size="16" font-weight="bold" x="0" y="210" fill="white">{message.price || ''}</text>
                  {/if}
        
                    <text font-size="14" fill="black"
                          class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr" y="260"
                          x="-55">{message.like}
                    </text>
                    <image xlink:href="img/icons_new/dislike_noback.svg"
                           class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr" width="18"
                           height="18" y="248" x="-45"></image>
                    <text font-size="14" fill="black"
                          class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr" y="260"
                          x="0">{message.dislike}
                    </text>
                </g>
            </g>
        </svg>

    </div>
{:else if templateType === 'live' }
    <div class="multipart-message">

        <svg xmlns="http://www.w3.org/2000/svg" class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr"
             width="320" transform="scale(1)" height="238">
            <foreignObject class="videoprev s-BTGIt7ri9Tsr" y="8" x="4" width="310" height="174">
                <div xmlns="http://www.w3.org/1999/xhtml"
                     style="width: 100%; height: 100%; border-radius: 10px; overflow: hidden;" class="s-BTGIt7ri9Tsr">
                    <img src="{message.preview}" style="width: 100%;object-fit: cover;height: 100%;" alt="Image"
                         class="s-BTGIt7ri9Tsr"></div>
            </foreignObject>
            <rect x="265" y="12" width="45" height="20" rx="4" ry="4" fill="#ff0000"></rect>

            <text font-size="16" font-weight="bold" x="270" y="28" fill="white">LIVE</text>
            <g class="s-BTGIt7ri9Tsr" transform="translate(0,-30)">
                <foreignObject x="4" y="222" width="40" height="40">
                    <div class="photo-circle photo-circle--small"><img src="{message.imageUrl}"/></div>
                </foreignObject>
                <text class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr" dominant-baseline="middle"
                      fill="black" font-size="16" font-weight="bold" x="50" y="234">{message.channel}
                </text>
                <text font-size="14" fill="black" class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr"
                      x="50" y="258">{message.name}
                </text>
                <g text-anchor="end" class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr" transform="translate(312)">
                    <image height="16" xlink:href="img/icons_new/views_noback.svg"
                           class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr"
                           y="225" text-anchor="end" width="32" x="-108"></image>
                    <text font-size="14" fill="black"
                          class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr"
                          y="238" width="200" x="0">{message.views} views
                    </text>

                  {#if message.price}
                    <rect x="-75" y="193" width="79" height="20" rx="8" ry="4" fill="#ff0000"></rect>
                    <text font-size="16" font-weight="bold" x="0" y="210" fill="white">{message.price || ''}</text>
                  {/if}
                    
                    <image class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr" width="18"
                           height="18" xlink:href="img/icons_new/like_noback.svg" y="244" x="-100"></image>
                    <text font-size="14" fill="black"
                          class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr" y="260"
                          x="-55">{message.like}
                    </text>
                    <image xlink:href="img/icons_new/dislike_noback.svg"
                           class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr" width="18"
                           height="18" y="248" x="-45"></image>
                    <text font-size="14" fill="black"
                          class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr" y="260"
                          x="0">{message.dislike}
                    </text>
                </g>
            </g>
        </svg>
    </div>
{:else if templateType === 'reels'}
    <div class="multipart-message videoreels">

        <svg xmlns="http://www.w3.org/2000/svg" class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr"
             width="210" transform="scale(1)" height="440">
            <foreignObject class="videoprev s-BTGIt7ri9Tsr" y="8" x="4" width="196" height="320">
                <div xmlns="http://www.w3.org/1999/xhtml"
                     style="height: 100%; width:100%; border-radius: 10px; overflow: hidden;" class="s-BTGIt7ri9Tsr">
                    <img src="{message.preview}" style="width: 100%;object-fit: cover;height: 100%;" alt="Image"
                         class="s-BTGIt7ri9Tsr"></div>
            </foreignObject>
            <g class="s-BTGIt7ri9Tsr" transform="translate(0,115)">
                <foreignObject x="4" y="222" width="40" height="40">
                    <div class="photo-circle photo-circle--small"><img src="{message.imageUrl}"/></div>
                </foreignObject>
                <text class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr" dominant-baseline="middle" fill="black" font-size="14" font-weight="bold" x="48" y="232">{message.channel}</text>
                <text font-size="12" fill="black" class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr" x="48" y="252">{message.name}</text>
                <g text-anchor="end" class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr" transform="translate(108,40)">
                    <image height="16" xlink:href="img/icons_new/views_noback.svg"
                           class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr"
                           y="225" text-anchor="end" width="32" x="-108"></image>
                    <text font-size="14" fill="black"
                          class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr"
                          y="238" width="200" x="0">{message.views} views
                    </text>
                    <image class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr" width="18"
                           height="18" xlink:href="img/icons_new/like_noback.svg" y="244" x="-100"></image>
                    <text font-size="14" fill="black"
                          class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr" y="260"
                          x="-55">{message.like}
                    </text>
                    <image xlink:href="img/icons_new/dislike_noback.svg"
                           class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr" width="18"
                           height="18" y="248" x="-45"></image>
                    <text font-size="14" fill="black"
                          class="s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr s-BTGIt7ri9Tsr" y="260"
                          x="0">{message.dislike}
                    </text>
                </g>
            </g>
        </svg>
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
        background-color: rgba(0, 0, 0, 0.7);
        padding: 0 0 8px 8px;
        border-radius: 0px;

    }

    .image-container.video {
        width: 320px;
        height: 180px;
        margin-top: 12px;
        margin-bottom: 4px;
    }

    .multipart-message.videoreels svg .image-container.video {
        width: 180px;
        height: 320px;
        margin-top: 12px;
        margin-bottom: 4px;
    }
    .videoreels .image-preview {
        transform: rotate(90deg);
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
    .multipart-message {
        height:100%
    }
    .multipart-message .element .conversation__info {
        margin: 0px 0px 0px 2px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .photo-circle--small {
        width:38px;
        height:38px;
        overflow: hidden;
    }
    .photo-circle--small img {
        width:100%;
        height:100%;
    }
    .videoprev {
        cursor:pointer;
    }
</style>