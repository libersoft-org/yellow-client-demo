<script>
    import {onMount} from 'svelte';
    import {activeContactIdStore, actualMVC, actualSMVC, contactSelected, videoSelected} from '../stores/mainstore.js';
    import {openComponentsStack} from '../stores/openComponentsStack.js';
    import {activeVideoIdStore} from '../stores/mainstore.js';
    import Carousel from 'svelte-carousel';
    import VideoModuletemplates from "./VideoModuleTemplates.svelte";
    import {activeVideView} from "../stores/mainstore.js";

    let selectedVid = {};
    let storeSize;
    openComponentsStack.subscribe((value) => {
        storeSize = value.length;
    });

    let isVideoSelected = false;
    let videoId;

    videoSelected.subscribe((value) => {
        isVideoSelected = value;
    });

    activeVideoIdStore.subscribe((value) => {
        videoId = value;
    });

    onMount(() => {
        function handleKeydown(event) {
            if (event.key === 'Escape' && storeSize == 0) {
                videoSelected.set(false);
                activeVideoIdStore.set(null);
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
    let videoCItem = [];
    videoCItem[0] = {};
    videoCItem[0].id = 1;
    videoCItem[0].message = '---';
    videoCItem[0].name = 'Yellow development';
    videoCItem[0].channel = 'yellow news';
    videoCItem[0].imageUrl = 'https://i.pravatar.cc/300?u=user5';
    videoCItem[0].preview = 'content/pv1.jpg';
    videoCItem[0].price = '$19.90'
    /* 19...90*/
    /* donate button! */
    videoCItem[0].views = 1000;
    videoCItem[0].like = 250;
    videoCItem[0].dislike = 100;
    videoCItem[0].videoUrl = 'content/video.mp4'

    videoCItem[1] = {};

    videoCItem[1].id = 2;
    videoCItem[1].message = '---';
    videoCItem[1].name = 'Libersoft ';
    videoCItem[1].channel = 'yellow ';
    videoCItem[1].imageUrl = 'img/icons/icon_nemp_v1.svg';
    videoCItem[1].preview = 'content/pv2.jpg';
    videoCItem[1].views = 1500;
    videoCItem[1].like = 257;
    videoCItem[1].dislike = 10;


    videoCItem[2] = {};

    videoCItem[2].id = 3;
    videoCItem[2].message = '---';
    videoCItem[2].name = 'Another one';
    videoCItem[2].channel = 'Tears of world';
    videoCItem[2].imageUrl = 'https://i.pravatar.cc/300?u=user6';
    videoCItem[2].preview = 'content/pv3.jpg';
    videoCItem[2].views = 10000;
    videoCItem[2].like = 0;
    videoCItem[2].dislike = 100;

    videoCItem[3] = {};
    videoCItem[3].id = 4;
    videoCItem[3].message = '---';
    videoCItem[3].name = 'Yellow development';
    videoCItem[3].channel = 'yellow news';
    videoCItem[3].imageUrl = 'https://i.pravatar.cc/300?u=user7';
    videoCItem[3].preview = 'content/pv4.jpg';
    videoCItem[3].views = 1000;
    videoCItem[3].like = 250;
    videoCItem[3].dislike = 100;

    videoCItem[4] = {};

    videoCItem[4].id = 5;
    videoCItem[4].message = '---';
    videoCItem[4].name = 'Libersoft ';
    videoCItem[4].channel = 'yellow';
    videoCItem[4].imageUrl = 'https://i.pravatar.cc/300?u=user9';
    videoCItem[4].preview = 'content/pv5.jpg';
    videoCItem[4].views = 1500;
    videoCItem[4].like = 257;
    videoCItem[4].dislike = 10;

    videoCItem[5] = {};

    videoCItem[5].id = 6;
    videoCItem[5].message = '---';
    videoCItem[5].name = 'Video of a day';
    videoCItem[5].channel = 'Funny vids';
    videoCItem[5].imageUrl = 'https://i.pravatar.cc/300?u=user8';
    videoCItem[5].preview = 'content/pv6.jpg';
    videoCItem[5].views = 10000;
    videoCItem[5].like = 0;
    videoCItem[5].dislike = 100;
    videoCItem[5].price = '$0.90'

    let videoLItem = videoCItem.map(item => ({...item}));
    videoLItem[0].preview = 'content/pv7.jpg';
    videoLItem[0].price = undefined;
    videoLItem[3].price = '$5';
    videoLItem[1].preview = 'content/pv8.jpg';
    videoLItem[2].preview = 'content/pv9.jpg';
    videoLItem[3].preview = 'content/pv10.jpg';
    videoLItem[4].preview = 'content/pv11.jpg';
    videoLItem[5].preview = 'content/pv12.jpg';

    let videoRItem = videoCItem.map(item => ({...item}));
    videoRItem[0].preview = 'content/pr1.jpg';
    videoRItem[1].preview = 'content/pr2.jpg';
    videoRItem[2].preview = 'content/pr3.jpg';
    videoRItem[3].preview = 'content/pr4.jpg';
    videoRItem[4].preview = 'content/pr5.jpg';
    videoRItem[5].preview = 'content/pr6.jpg';
    let carpos1 = 0;
    let carpos2 = 0;
    let carpos3 = 0;
    export let isPaused = true;
    import AudioPlayer from './AudioPlayer.svelte';
    import LeafMap from './utils/LeafMap.svelte';
    import CommentsList from "./CommentsList.svelte";

    let currentTime = '0:00';
    let duration = '0:00';
    let showTranslation = false;
    let playedstart = false;

    function updateTime(event) {
        const videoElement = event.currentTarget;
        currentTime = formatTime(videoElement.currentTime);
        duration = formatTime(videoElement.duration);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    function toggleVideoPlayback(event) {
        if (!playedstart) {
            event.preventDefault();
            playedstart - true;
            const videoContainer = event.currentTarget.closest('.image-container');
            const videoElement = videoContainer.querySelector('video');
            videoElement.controls = true;
            if (videoElement.paused) {
                videoElement.play();
            } else {
                videoElement.pause();
            }

        }
        // Zastavte výchozí událost

    }

    function handleVideoPlay(event) {
        const videoElement = event.currentTarget;
        //videoElement.controls = true;
        const iconContainer = videoElement.previousElementSibling;
        iconContainer.style.display = 'none';
    }

    function handleVideoPause(event) {
        const videoElement = event.currentTarget;
        //videoElement.controls = false;
        const iconContainer = videoElement.previousElementSibling;
        iconContainer.style.display = 'none';
    }
</script>

<div class="conversation-detail videolist" class:hidden={$activeVideView != "videolist"}>
    <div class="videomodule-news">
        <div class="videomodule-title">
            <span>Video</span>

        </div>
        <div class="container-for-carousel">
            <div class="back-button">
                <a class="icon" class:hidden={carpos1<=0}
                   on:click="{()=>{carpos1 -= 1;document.querySelector('.car1-p').click()}}" alt="search"><img
                        src="img/icons/icon_back.svg" alt="search"/></a>
            </div>
            <div class="carousel-pack">
                <div class="carousel-container">
                    <Carousel
                            let:showPrevPage
                            let:showNextPage
                            particlesToShow={18} particlesToScroll={1} arrows=false loop>
                        <div class="car1-p" slot="prev" on:click={showPrevPage}></div>

                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[0]}}>
                            <VideoModuletemplates message={videoCItem[0]} templateType="video"/>
                        </div>
                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[1]}}>
                            <VideoModuletemplates message={videoCItem[1]} templateType="video"/>
                        </div>
                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[2]}}>
                            <VideoModuletemplates message={videoCItem[2]} templateType="video"/>
                        </div>

                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[3]}}>
                            <VideoModuletemplates message={videoCItem[3]} templateType="video"/>
                        </div>
                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[4]}}>
                            <VideoModuletemplates message={videoCItem[4]} templateType="video"/>
                        </div>
                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[5]}}>
                            <VideoModuletemplates message={videoCItem[5]} templateType="video"/>
                        </div>
                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[6]}}>
                            <VideoModuletemplates message={videoCItem[0]} templateType="video"/>
                        </div>
                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[0]}}>
                            <VideoModuletemplates message={videoCItem[0]} templateType="video"/>
                        </div>
                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[1]}}>
                            <VideoModuletemplates message={videoCItem[1]} templateType="video"/>
                        </div>
                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[2]}}>
                            <VideoModuletemplates message={videoCItem[2]} templateType="video"/>
                        </div>

                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[3]}}>
                            <VideoModuletemplates message={videoCItem[3]} templateType="video"/>
                        </div>
                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[4]}}>
                            <VideoModuletemplates message={videoCItem[4]} templateType="video"/>
                        </div>
                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[5]}}>
                            <VideoModuletemplates message={videoCItem[5]} templateType="video"/>
                        </div>
                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[6]}}>
                            <VideoModuletemplates message={videoCItem[0]} templateType="video"/>
                        </div>
                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[0]}}>
                            <VideoModuletemplates message={videoCItem[0]} templateType="video"/>
                        </div>
                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[1]}}>
                            <VideoModuletemplates message={videoCItem[1]} templateType="video"/>
                        </div>
                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[2]}}>
                            <VideoModuletemplates message={videoCItem[2]} templateType="video"/>
                        </div>

                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[3]}}>
                            <VideoModuletemplates message={videoCItem[3]} templateType="video"/>
                        </div>
                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[4]}}>
                            <VideoModuletemplates message={videoCItem[4]} templateType="video"/>
                        </div>
                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[5]}}>
                            <VideoModuletemplates message={videoCItem[5]} templateType="video"/>
                        </div>
                        <div class="carousel-item"
                             on:click={()=>{$activeVideView='videodetail'; selectedVid = videoCItem[6]}}>
                            <VideoModuletemplates message={videoCItem[0]} templateType="video"/>
                        </div>



                        <div class="car1-n" slot="next" on:click={showNextPage}></div>
                    </Carousel>
                </div>
            </div>
            <div class="back-button">
                <a class="icon" class:hidden={carpos1>6}
                   on:click="{()=>{carpos1+=1;document.querySelector('.car1-n').click()}}" alt="search"><img
                        src="img/icons/icon_forw.svg" alt="search"/></a>
            </div>
        </div>
    </div>

    <div class="videomodule-live">
        <div class="videomodule-title">
            <span>Live</span>
        </div>
        <div class="container-for-carousel">
            <div class="back-button">
                <a class="icon" class:hidden={carpos2<=0}
                   on:click="{()=>{carpos2 -=1 ;document.querySelector('.car1-p2').click()}}" alt="search"><img
                        src="img/icons/icon_back.svg" alt="search"/></a>
            </div>
            <div class="carousel-pack">
                <div class="carousel-container">
                    <Carousel
                            let:showPrevPage
                            let:showNextPage
                            particlesToShow={18} particlesToScroll={1} arrows=false loop>
                        <div class="car1-p2" slot="prev" on:click={showPrevPage}></div>

                        <div class="carousel-item">
                            <VideoModuletemplates message={videoLItem[0]} templateType="live"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoLItem[1]} templateType="live"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoLItem[2]} templateType="live"/>
                        </div>

                        <div class="carousel-item">
                            <VideoModuletemplates message={videoLItem[3]} templateType="live"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoLItem[4]} templateType="live"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoLItem[5]} templateType="live"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoLItem[0]} templateType="live"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoLItem[1]} templateType="live"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoLItem[2]} templateType="live"/>
                        </div>

                        <div class="carousel-item">
                            <VideoModuletemplates message={videoLItem[3]} templateType="live"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoLItem[4]} templateType="live"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoLItem[5]} templateType="live"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoLItem[0]} templateType="live"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoLItem[1]} templateType="live"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoLItem[2]} templateType="live"/>
                        </div>

                        <div class="carousel-item">
                            <VideoModuletemplates message={videoLItem[3]} templateType="live"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoLItem[4]} templateType="video"/>
                        </div>

                        <div class="carousel-item">
                            <VideoModuletemplates message={videoLItem[5]} templateType="video"/>
                        </div>

                        <div class="car1-n2" slot="next" on:click={showNextPage}></div>
                    </Carousel>
                </div>
            </div>
            <div class="back-button">
                <a class="icon" class:hidden={carpos2>6}
                   on:click="{()=>{carpos2 +=1; document.querySelector('.car1-n2').click()}}" alt="search"><img
                        src="img/icons/icon_forw.svg" alt="search"/></a>
            </div>
        </div>
    </div>
    <div class="videomodule-reels">
        <div class="videomodule-title">
            <span>Reels</span>

        </div>
        <div class="container-for-carousel reels">
            <div class="back-button">
                <a class="icon" class:hidden={carpos3<=0}
                   on:click="{()=>{carpos3 -=1; document.querySelector('.car1-p3').click()}}" alt="search"><img
                        src="img/icons/icon_back.svg" alt="search"/></a>
            </div>
            <div class="carousel-pack">
                <div class="carousel-container reels">
                    <Carousel
                            let:showPrevPage
                            let:showNextPage
                            particlesToShow={18} particlesToScroll={1} arrows=false loop>
                        <div class="car1-p3" slot="prev" on:click={showPrevPage}></div>

                        <div class="carousel-item">
                            <VideoModuletemplates message={videoRItem[0]} templateType="reels"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoRItem[1]} templateType="reels"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoRItem[2]} templateType="reels"/>
                        </div>

                        <div class="carousel-item">
                            <VideoModuletemplates message={videoRItem[3]} templateType="reels"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoRItem[4]} templateType="reels"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoRItem[5]} templateType="reels"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoRItem[0]} templateType="reels"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoRItem[1]} templateType="reels"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoRItem[2]} templateType="reels"/>
                        </div>

                        <div class="carousel-item">
                            <VideoModuletemplates message={videoRItem[3]} templateType="reels"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoRItem[4]} templateType="reels"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoRItem[5]} templateType="reels"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoRItem[0]} templateType="reels"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoRItem[1]} templateType="reels"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoRItem[2]} templateType="reels"/>
                        </div>

                        <div class="carousel-item">
                            <VideoModuletemplates message={videoRItem[3]} templateType="reels"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoRItem[4]} templateType="reels"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoRItem[5]} templateType="reels"/>
                        </div>

                        <div class="car1-n3" slot="next" on:click={showNextPage}></div>
                    </Carousel>
                </div>
            </div>
            <div class="back-button">
                <a class="icon" class:hidden={carpos3>6}
                   on:click="{()=>{carpos3 += 1 ;document.querySelector('.car1-n3').click()}}" alt="search"><img
                        src="img/icons/icon_forw.svg" alt="search"/></a>
            </div>
        </div>
    </div>
</div>
<div class="conversation-detail videodetail" class:hidden={$activeVideView != "videodetail"}>
    <div class="video-detail-item">
    <div class="videolist-button" on:click={()=>{
                $activeVideView = 'videolist';
    }}>
        <span>back to videos</span>
    </div>
    <div class="videocontainer">
    <div class="video-detail">
        <div
                class="image-container video svelte-{isPaused ? 'paused' : ''}" on:click={toggleVideoPlayback}

        >
            <div class="icon-container">
                <img src="../img/icons/icn_play.svg" alt="Play" class="play-icon"/>
            </div>
            <video
                    id="video-{selectedVid.id}"
                    src={selectedVid.videoUrl}
                    playsinline
                    poster={selectedVid.preview}
                    on:play={handleVideoPlay}
                    on:pause={handleVideoPause}
                    on:timeupdate={updateTime}
            >
                <track kind="captions"/>
            </video>
        </div>
    </div>
    <div class="video-title">
        <div class="title">{selectedVid.name}</div>
        <div class="views">
            <div class="img"><img src="img/icons_new/views_noback.svg"/></div>
            <div>{selectedVid.views}</div>
        </div>
    </div>
    <div class="video-info">
        <div class="photo-video-info" on:click={() => {

							$activeVideView='videolist';
							document.querySelector('.conversation').click();

                        }}>
            <div class="conversation__user-photo">
                <img
                        class="photo-circle photo-circle--medium"
                        src={selectedVid.imageUrl}
                        alt={selectedVid.imageUrl}
                />
            </div>
            <div class="conversation__info">
                <div class="conversation__info__user-name">{selectedVid.channel}</div>
                <div class="conversation__info__user-email">152 000 followers</div>
            </div>
        </div>
        <div class="second-container-semi" style="display: flex; justify-content: space-between;">
            <div class="like-dislike">
                <div class="element-l">
                    <div class="imgdiv-like"><img src="./img/icons_new/like_noback.svg" alt="Like Icon"></div>
                    <div><span>{selectedVid.like} </span></div>
                </div>
                <div class="element-p">
                    <div class="imgdiv-dislike"><img src="./img/icons_new/dislike_noback.svg" alt="Dislike Icon"></div>
                    <div><span>{selectedVid.dislike}</span></div>
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
                <div class="imgdiv-subscribe"><img src="./img/icons_new/account_add_noback.svg" alt="Follow Icon"></div>
                <div><span>Follow</span></div>
            </div>
        </div>
    </div>
    <div class="video-description">
        <div class="element">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
            vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
        </div>
        <div class="element"><b>Link: <a href="">www.libersoft.org</a></b></div>
    </div>
    </div>
    <div class="comment-list">
        <CommentsList/>
    </div>
</div>
</div>


<style>
    .video-detail-item {
        border-radius: 10px;
        margin: 16px auto 16px auto;
        background: var(--primary-color-p44);
        width:calc(100% - 64px);
        max-width: var(--container-max-width);
        box-shadow: var(--basic-shadow);
    }
    .video-detail {
        margin: 8px 0px 8px 0px;
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

    .conversation-detail.videolist, .conversation-detail.videodetail{
        box-shadow: none !important;
        background: transparent;
        height:calc(100% - 0px);
        display: flex;
        justify-content: start;
        flex-direction: column;
    }

    .videolistl {
        box-shadow: none !important;
        background: transparent;
        flex-direction: column;
        align-items: normal;
        justify-content: start;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .conversation-detail.videodetaill {
        /*box-shadow: none !important;
        background: transparent;
        height:calc(100% - 0px); */


        border-radius: 10px;
        border: 1px solid var(--primary-color-p25);
        margin: 16px 32px;
        background: var(--primary-color-p35);
        box-shadow: var(--basic-shadow);
        padding-top: 16px;
       /* width: calc(100% - 128px); */
    }

    .subscibers-button, .videolist-button {
        background-color: var(--primary-color);
        border-radius: 10px 10px 0 0;
        width: auto;
        cursor: pointer;
        margin-bottom: 16px;
        padding: 8px;
        text-align: center;
    }
    .videolist-button span {
        font-weight:bold;
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
        border-radius: 10px;
        cursor: pointer;
    }

    @media (min-width: 795px) {
        .subscibers-button {
            display: none !important;
        }
    }

    .hidden {
        display: none!important;
    }

    .videodetail .video-title, .videodetail .video-info {
        margin: 8px 0px;
        flex-direction: row;
        align-content: space-between;
        display: flex;
        align-items: center;

    }

    .video-info .conversation__user-photo {
        height: 50px;
        width: 50px;
    }

    .video-info .conversation__info {
        margin-left: 16px;
        text-align: left;
    }

    .video-info .conversation__info__user-name {
        font-weight: bold;
    }

    .video-title .title {
        font-weight: bold;
        font-size: 24px;
    }

    .video-title .views {
        font-weight: normal;
        font-size: 16px;
        margin-right: 0;
        margin-left: auto;
        display: inline-flex;
    }

    .video-title .views .img {
        margin: 2px 4px 0px 0px;
        width: 16px;
        height: 16px;
    }

    .video-title .views img {
        width: 100%;
        height: 100%;
    }

    .second-container-semi {
        margin-left: auto;
        margin-right: 0;
        display: inline-grid;
        gap: 2px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .second-container-semi .like-dislike {
        display: inline-flex;
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
        height: 30px;
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
        height: 30px;
        padding-right: 4px;
        padding-left: 4px;
        margin: 0;
    }

    .second-container-semi .element-p {
        width: 42px;
        display: inline-flex;
        background-color: var(--primary-color-p15);
        border-radius: 0px 5px 5px 0px;
        border: 1px solid var(--primary-color-15);
        border-left: none;
        align-items: center;
        font-size: 0.8em;
        font-weight: bold;
        justify-content: center;
        cursor: pointer;
        height: 30px;
        padding-left: 4px;
        padding-right: 4px;
        margin: 0;
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

    .second-container-semi .imgdiv-subscribe {
        width: 14px;
        height: 14px;
        margin-right: 2px;
    }

    .second-container-semi .imgdiv-like {
        width: 20px;
        height: 20px;
        margin-top: -2px;
        margin-right: 2px;
    }

    .second-container-semi img {
        width: 100%;
        height: 100%;
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

    .videodetail{
        container-type: inline-size;
        container-name: cod;
    }

    @container cod (max-width:540px) {
        .video-detail-item{
            margin: 8px 8px 8px 8px !important;
            width: calc(100% - 16px) !important;
        }
    }

    .video-info {
        container-type: inline-size;
        container-name: vii;
    }

    @container vii (max-width:600px) {
        .second-container-semi {
            display: inline-grid !important;
            gap: 2px;
            grid-template-columns: 1fr 1fr;
        }
    }

    @container vii (max-width:400px) {
        .second-container-semi {
            display: inline-grid !important;
            gap: 2px;
            grid-template-columns: 1fr;
        }
    }

    .photo-video-info {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .video-description {
        background-color: var(--primary-color-p44);
        border-radius: 5px;
        border: 1px solid var(--primary-color-p44);
        padding: 8px 0px;
        margin: 8px 0px;
        text-align: left;
    }

    .video-description a {
        text-decoration: none;
    }

    .comment-list {
        margin: 8px 32px 8px 32px;
    }
    .videocontainer {

        margin: 8px 32px 8px 32px;
    }
</style>
