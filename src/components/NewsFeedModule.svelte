<script>
import CommentsList from "./CommentsList.svelte";
import NewsFeedCarusel from "./NewsFeedCarusel.svelte";
import {activeVideView, actualMVC} from "../stores/mainstore.js";
</script>

<div class="conversation-detail videodetail" >
    {#if $actualMVC === 'newsfeed'}
    <NewsFeedCarusel></NewsFeedCarusel>
    {/if}
    <div class="newsfeed-item">
    <div class="video-info">
        <div class="photo-video-info">
            <div class="conversation__user-photo" on:click={() => {
							document.querySelector('.conversation').click();

                        }}>
                <img
                        class="photo-circle photo-circle--medium"
                        src="https://i.pravatar.cc/300?u=user3"
                        alt="https://i.pravatar.cc/300?u=user3"
                />
            </div>
            <div class="conversation__info" on:click={() => {

							document.querySelector('.conversation').click();

                        }}>
                <div class="conversation__info__user-name">NewUser</div>
                <div class="conversation__info__user-email">newuser@old.domain</div>
            </div>
            <div class="conversation-time">
                <div class="conversation__info__user-name">Today</div>
                <div class="conversation__info__user-email">now</div>
                <div class="views">
                    <div class="img"><img src="img/icons_new/views_noback.svg"/></div>
                    <div>1234</div>
                </div>
            </div>
        </div>

    </div>
    <div class="video-description">
        <div class="element">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
        </div>
        <div class="newsfeed-image">
            <img src="content/pv6.jpg">
        </div>
        <div class="element"><b>Link: <a href="" >www.libersoft.org</a></b></div>
    </div>
    <div class="second-container-semi" >
    donate!
    
        <div class="like-dislike">
            <div class="element-l">
                <div class="imgdiv-like"><img src="./img/icons_new/like_noback.svg" alt="Like Icon"></div>
                <div><span>181</span></div>
            </div>
            <div class="element-p">
                <div class="imgdiv-dislike"><img src="./img/icons_new/dislike_noback.svg" alt="Dislike Icon"></div>
                <div><span>207</span></div>
            </div>
        </div>
        <div class="element">
            <div class="imgdiv-share"><img src="./img/icons_new/forward_noback.svg" alt="Share Icon"></div>
            <div><span>Share</span></div>
        </div>
        <div class="element">
            <div class="imgdiv-download"><img src="./img/icons/icon_download.svg" alt="Download Icon"></div>
            <div><span>Download</span></div>
        </div>
        <div class="element">
            <div class="imgdiv-follow"><img src="./img/icons_new/account_add_noback.svg" alt="Follow Icon"></div>
            <div><span>Follow</span></div>
        </div>
    </div>
    <div class="comment-list">
        <CommentsList/>
    </div>
</div>
<div class="newsfeed-item">
    <div class="video-info">
        <div class="photo-video-info">
            <div class="conversation__user-photo">
                <img
                        class="photo-circle photo-circle--medium"
                        src="https://i.pravatar.cc/300?u=user3"
                        alt="https://i.pravatar.cc/300?u=user3"
                />
            </div>
            <div class="conversation__info">
                <div class="conversation__info__user-name">NewUser</div>
                <div class="conversation__info__user-email">newuser@old.domain</div>
            </div>
            <div class="conversation-time">
                <div class="conversation__info__user-name">Tueasday</div>
                <div class="conversation__info__user-email">17:20</div>
                <div class="views">
                    <div class="img"><img src="img/icons_new/views_noback.svg"/></div>
                    <div>1234</div>
                </div>
            </div>
        </div>

    </div>
    <div class="video-description">
        <div class="element">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
        </div>
        <div class="newsfeed-image">
            <img src="content/pv4.jpg">
        </div>
        <div class="element"><b>Link: <a href="" >www.libersoft.org</a></b></div>
    </div>
    <div class="second-container-semi" >
        <div class="like-dislike">
            <div class="element-l">
                <div class="imgdiv-like"><img src="./img/icons_new/like_noback.svg" alt="Like Icon"></div>
                <div><span>121</span></div>
            </div>
            <div class="element-p">
                <div class="imgdiv-dislike"><img src="./img/icons_new/dislike_noback.svg" alt="Dislike Icon"></div>
                <div><span>104</span></div>
            </div>
        </div>
        <div class="element">
            <div class="imgdiv-share"><img src="./img/icons_new/forward_noback.svg" alt="Share Icon"></div>
            <div><span>Share</span></div>
        </div>
        <div class="element">
            <div class="imgdiv-download"><img src="./img/icons/icon_download.svg" alt="Download Icon"></div>
            <div><span>Download</span></div>
        </div>
        <div class="element">
            <div class="imgdiv-follow"><img src="./img/icons_new/account_add_noback.svg" alt="Follow Icon"></div>
            <div><span>Follow</span></div>
        </div>
    </div>
    <div class="comment-list">
        <CommentsList/>
    </div>
</div>
</div>
<style>
    .video-detail {
        margin: 8px 32px 8px 32px;
        position: relative;
        aspect-ratio: auto;
        height: auto;
    }

    .video-detail .image-container, .video-detail video {
        width: 100%;
    }

    .videomodule-news, .videomodule-live, .videomodule-reels {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 8px 0 0 0;
        position: relative;
        /* height: 100%; */

    }


    .videomodule-news::before, .videomodule-live::before {
        content: "";
        position: absolute;
        top: 28px;
        left: 40px;
        width: calc(100% - 80px);
        height: 250px !important;
        /* background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, 1) 100%); */
        pointer-events: none;
        z-index: 126;
        display: block;
    }

    .videomodule-reels::before {
        content: "";
        position: absolute;
        top: 28px;
        left: 40px;
        width: calc(100% - 80px);
        height: 440px !important;
        /* background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, 1) 100%); */
        pointer-events: none;
        z-index: 126;
        display: block;
    }

    .videomodule-title {
        width: calc(100% - 92px);
        height: 1.2em;
        font-weight: bold;
        margin-left: 48px;
        margin-right: 92px;
        border-bottom: 1px solid black;
        text-align: start;

    }

    .videomodule-title hr {
        overflow: hidden;
        margin-right: 105px;
    }

    .container-for-carousel {
        display: flex;
        width: 100%;
        overflow: hidden;
        align-items: center;

    }

    .container-for-carousel.reels {
        height: 440px;
    }

    .carousel-pack {
        width: 100%;
        overflow: hidden
    }

    .carousel-container {
        width: 5760px;
        overflow: hidden;
    }

    .carousel-container.reels {
        width: 3780px;
        overflow: hidden;
    }

    .arrow {
        width: 48px;
        height: 48px;
        background-color: #ddd;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .carousel-item {
        width: 320px !important;
        min-width: 320px !important;
        height: 240px;
        box-sizing: border-box;
        padding: 2px;
        background-color: transparent;
        align-items: center;
        justify-content: center;
        display: flex;
    }

    .videomodule-reels .carousel-item {
        width: 210px !important;
        min-width: 210px !important;
        height: 428px;
        box-sizing: border-box;
        padding: 2px;
        background-color: transparent;
        align-items: center;
        justify-content: center;
        display: flex;
    }

    .back-button {
        width: 48px;
        height: 68px;
        display: flex;
        justify-content: center;
        padding: 0;
    }

    .videomodule-reels .back-button {
    }

    .back-button .icon img {
        padding: 0;
        width: 48px;
        height: 48px;
    }

    .conversation-detail {
        flex-direction: column;
        align-items: normal;
        justify-content: start;
        overflow-x: hidden;
        overflow-y: auto;
        /*box-shadow: none!important; */

    }

    .conversation-detail.videolist, .conversation-detail.videodetail{
        box-shadow: none !important;
        background: transparent;
        height:calc(100% - 0px);
        display: flex;
        flex-direction: column;
    }

    .subscibers-button, .videolist-button {
        background-color: var(--primary-color-p15);
        border-radius: 5px;
        border: 1px solid black;
        width: auto;
        cursor: pointer;
        width: 120px;
        margin-left: 64px;
        margin-top: 8px;
        margin-bottom: 8px;
        padding: 4px;
        text-align: center;
    }

    .image-container.video {
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;

    }

    .image-container.video .icon-container {
        width: 25%;
        height: 25%;
    }

    .image-container.video .icon-container .play-icon {
        width: 100%;
        height: 100%;
    }

    .image-container video {
        width: 100%;
        aspect-ratio: auto;
        height: auto;
        object-fit: cover;
    }

    @media (min-width: 795px) {
        .subscibers-button {
            display: none !important;
        }
    }

    .hidden {
        display: none;
    }

    .conversation-detail .video-title, .conversation-detail .video-info {
        margin: 8px 32px;
        flex-direction: row;
        align-content: space-between;
        display: inline-flex;
        align-items: center;

    }

    .conversation-detail .video-info .conversation__user-photo {
        height: 50px;
        width: 50px;
        cursor: pointer;
    }

    .conversation-detail .video-info .conversation__info {
        margin-left: 16px;
        text-align: left;
        cursor: pointer;
    }

    .conversation-detail .video-info .conversation__info__user-name {
        font-weight: bold;
        cursor: pointer;
    }

    .conversation-detail .video-title .title {
        font-weight: bold;
        font-size: 16px;
    }

    .conversation-detail .views {
        font-weight: normal;
        font-size: 16px;
        margin-right: 0;
        margin-left: auto;
        display: inline-flex;
    }

    .conversation-detail .views .img {
        margin: 2px 4px 0px 0px;
        width: 16px;
        height: 16px;
    }

    .conversation-detail .views img {
        width: 100%;
        height: 100%;
    }

    .second-container-semi {
        display: grid;
        gap: 2px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin: 8px 32px 8px auto;
    }

    .second-container-semi .like-dislike {
        display: inline-flex;
        flex: 1;
        border-radius: 5px;
    }
    .second-container-semi .element {
        width: 100px;
        display: inline-flex;
        background-color: var(--primary-color-p15);
        border-radius: 5px;
        border: 1px solid var(--primary-color-15);
        align-items: center;
        font-size: 0.8em;
        font-weight: bold;
        justify-content: center;
        cursor: pointer;
        height:30px;
    }
    .second-container-semi .element-l {
        width: 42px;
        display: inline-flex;
        background-color: var(--primary-color-p15);
        border-radius: 5px 0px 0px 5px;
        border: 1px solid var(--primary-color-15);
        border-right: none;

        align-items: center;
        font-size: 0.8em;
        font-weight: bold;
        justify-content: center;
        cursor: pointer;
        height:30px;
        padding-right: 4px;
        padding-left: 4px;
        margin:0;
    }
    .second-container-semi .element-p {
        width: 42px;
        display: inline-flex;
        background-color: var(--primary-color-p15);
        border-radius:0px 5px 5px 0px;
        border: 1px solid var(--primary-color-15);
        border-left: none;
        align-items: center;
        font-size: 0.8em;
        font-weight: bold;
        justify-content: center;
        cursor: pointer;
        height:30px;
        padding-left: 4px;
        padding-right: 4px;
        margin:0;
    }

    .second-container-semi .element:hover, .second-container-semi .element-l:hover, .second-container-semi .element-p:hover {
        background-color: var(--primary-color-p25)
    }

    .second-container-semi .imgdiv-share {
        width: 16px;
        height: 16px;
        margin-right: 2px;
    }
    .second-container-semi .imgdiv-download {
        width: 14px;
        height: 14px;
        margin-right: 2px;
    }
    .second-container-semi .imgdiv-follow {
        width: 16px;
        height: 16px;
        margin-right: 2px;
    }

    .second-container-semi .imgdiv-like {
        width: 20px;
        height: 20px;
        margin-top: -2px;
        margin-right: 2px;
    }
    .second-container-semi img {
        width:100%;
        height:100%;
    }

    .second-container-semi .imgdiv-dislike {
        width: 20px;
        height: 20px;
        margin-top: 2px;
        margin-right: 2px;

    }

    .second-container-semi .imgdiv img, .second-container-semi .imgdiv-like img, .second-container-semi .imgdiv-dislike img {
        width: 100%;
        height: 100%;
    }
    .videodetail {
        container-type: inline-size;
        container-name: vid;
    }
    @container vid (max-width:540px) {
        .newsfeed-item {
            margin: 8px 8px 8px 8px!important;
            width: calc(100% - 16px) !important;
        }
    }
    .newsfeed-item {
        container-type: inline-size;
        container-name: vi;
    }
    @container vi (max-width:600px) {
        .second-container-semi {
            display: inline-grid!important;
            gap:2px;
            grid-template-columns: 1fr 1fr;
        }
    }
    @container vi (max-width:400px) {
        .second-container-semi {
            display: inline-grid!important;
            gap:2px;
            grid-template-columns: 1fr;
        }
    }

    .photo-video-info {
        display: flex;
        align-items: center;
        flex: 1;
    }
    .video-description {
        border-radius: 5px;
        margin: 8px 32px;
        text-align: left;
    }
    .video-description a  {
        text-decoration: none;
    }
    .comment-list {
        margin:8px 32px 8px 32px;
    }
    .newsfeed-image {
        width:100%;
        aspect-ratio: 16/9;
        height:auto;
        margin: 8px 0;
    }
    .newsfeed-image img {
        width:100%;
        height:100%;
        object-fit: cover;
        border-radius:10px;
    }
    .conversation-time {
        margin-right: 0;
        margin-left: auto;
        text-align: right;
    }
    .newsfeed-line {
        border-bottom:1px solid transparent;
        width:100%;
        margin: 32px 0;

    }
    .photo-video-info .photo-circle {
    }
    .newsfeed-item {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        /* border: 1px solid var(--primary-color-p44); */
        margin: 16px auto 16px auto;
        background-color: var(--primary-color-p44);
        box-shadow: var(--basic-shadow);
        padding-top: 16px;
        width: calc(100% - 64px);
        max-width: var(--container-max-width);

    }
</style>
