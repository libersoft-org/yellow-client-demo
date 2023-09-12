<script>
    import {onMount} from 'svelte';
    import {videoSelected} from '../stores/mainstore.js';
    import {openComponentsStack} from '../stores/openComponentsStack.js';
    import {activeVideoIdStore} from '../stores/mainstore.js';
    import Carousel from 'svelte-carousel';
    import VideoModuletemplates from "./VideoModuleTemplates.svelte";
    let activeType = 'videolist';
    let selectedVid ={};
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
    videoCItem[0].views = 1000;
    videoCItem[0].like = 250;
    videoCItem[0].dislike = 100;
    videoCItem[0].videoUrl='content/video.mp4'

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

    let videoLItem = videoCItem.map(item => ({ ...item }));
    videoLItem[0].preview ='content/pv7.jpg';
    videoLItem[1].preview ='content/pv8.jpg';
    videoLItem[2].preview ='content/pv9.jpg';
    videoLItem[3].preview ='content/pv10.jpg';
    videoLItem[4].preview ='content/pv11.jpg';
    videoLItem[5].preview ='content/pv12.jpg';

    let videoRItem = videoCItem.map(item => ({ ...item }));
    videoRItem[0].preview ='content/pr1.jpg';
    videoRItem[1].preview ='content/pr2.jpg';
    videoRItem[2].preview ='content/pr3.jpg';
    videoRItem[3].preview ='content/pr4.jpg';
    videoRItem[4].preview ='content/pr5.jpg';
    videoRItem[5].preview ='content/pr6.jpg';

    export let isPaused = true;
    import AudioPlayer from './AudioPlayer.svelte';
    import LeafMap from './utils/LeafMap.svelte';
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

<div class="conversation-detail videolist" class:hidden={activeType != "videolist"}>
    <div class="subscibers-button" on:click={()=>{
                document.querySelector(`.panel-left`).classList.add('active-panel');
                document.querySelector(`.panel-right`).classList.remove('active-panel');
                window.adjustPanels();
    }}>
        <span>Subscribers</span>
    </div>
    <div class="videomodule-news">
        <div class="videomodule-title">
            <span>Video</span>

        </div>
        <div class="container-for-carousel">
            <div class="back-button">
                <a class="icon" on:click="{()=>{document.querySelector('.car1-p').click()}}" alt="search"><img
                        src="img/icons/icon_back.svg" alt="search"/></a>
            </div>
            <div class="carousel-pack">
                <div class="carousel-container">
                    <Carousel
                            let:showPrevPage
                            let:showNextPage
                            particlesToShow={18} particlesToScroll={3} arrows=false loop>
                        <div class="car1-p" slot="prev" on:click={showPrevPage}></div>

                        <div class="carousel-item" on:click={()=>{activeType='videodetail'; selectedVid = videoCItem[0]}}>
                            <VideoModuletemplates message={videoCItem[0]} templateType="video"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoCItem[1]} templateType="video"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoCItem[2]} templateType="video"/>
                        </div>

                        <div class="carousel-item">
                            <VideoModuletemplates message={videoCItem[3]} templateType="video"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoCItem[4]} templateType="video"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoCItem[5]} templateType="video"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoCItem[0]} templateType="video"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoCItem[1]} templateType="video"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoCItem[2]} templateType="video"/>
                        </div>

                        <div class="carousel-item">
                            <VideoModuletemplates message={videoCItem[3]} templateType="video"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoCItem[4]} templateType="video"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoCItem[5]} templateType="video"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoCItem[0]} templateType="video"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoCItem[1]} templateType="video"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoCItem[2]} templateType="video"/>
                        </div>

                        <div class="carousel-item">
                            <VideoModuletemplates message={videoCItem[3]} templateType="video"/>
                        </div>
                        <div class="carousel-item">
                            <VideoModuletemplates message={videoCItem[4]} templateType="video"/>
                        </div>

                        <div class="carousel-item">
                            <VideoModuletemplates message={videoCItem[5]} templateType="video"/>
                        </div>


                        <div class="car1-n" slot="next" on:click={showNextPage}></div>
                    </Carousel>
                </div>
            </div>
            <div class="back-button">
                <a class="icon" on:click="{()=>{document.querySelector('.car1-n').click()}}" alt="search"><img
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
                <a class="icon" on:click="{()=>{document.querySelector('.car1-p2').click()}}" alt="search"><img
                        src="img/icons/icon_back.svg" alt="search"/></a>
            </div>
            <div class="carousel-pack">
                <div class="carousel-container">
                    <Carousel
                            let:showPrevPage
                            let:showNextPage
                            particlesToShow={18} particlesToScroll={3} arrows=false loop>
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
                <a class="icon" on:click="{()=>{document.querySelector('.car1-n2').click()}}" alt="search"><img
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
                <a class="icon" on:click="{()=>{document.querySelector('.car1-p3').click()}}" alt="search"><img
                        src="img/icons/icon_back.svg" alt="search"/></a>
            </div>
            <div class="carousel-pack">
                <div class="carousel-container reels">
                    <Carousel
                            let:showPrevPage
                            let:showNextPage
                            particlesToShow={18} particlesToScroll={3} arrows=false loop>
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
                <a class="icon" on:click="{()=>{document.querySelector('.car1-n3').click()}}" alt="search"><img
                        src="img/icons/icon_forw.svg" alt="search"/></a>
            </div>
        </div>
    </div>
</div>
<div class="conversation-detail videodetail" class:hidden={activeType != "videodetail"}>
    <div class="videolist-button" on:click={()=>{
                activeType = 'videolist';
    }}>
        <span>back to videos</span>
    </div>
    <div class="video-detail">
        <div
                class="image-container video svelte-{isPaused ? 'paused' : ''}" on:click={toggleVideoPlayback}

        >
            <div class="icon-container">
                <img src="../img/icons/icn_play.svg" alt="Play" class="play-icon"  />
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
                <track kind="captions" />
            </video>
        </div>
    </div>

</div>


<style>
    .video-detail {
        flex: 1;
        margin: 0 64px 0 64px;
        overflow: hidden;

    }
    .video-detail .image-container, .video-detail video {
        width:100%;
    }
    .videomodule-news, .videomodule-live, .videomodule-reels {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 8px 0 0 0;
        position: relative;
        height: 100%;

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
        width: calc(100% - 110px);
        height: 1.2em;
        font-weight: bold;
        margin-left: 40px;
        margin-right: 105px;
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
        box-shadow: none!important;
    }
    .subscibers-button, .videolist-button {
        background-color: var(--primary-color-p15);
        border-radius: 5px;
        border: 1px solid black;
        width:auto;
        cursor: pointer;
        width:100px;
        margin-left:48px;
        margin-top: 8px;
        padding:4px;
        text-align: center;
    }
    @media (min-width: 795px) {
        .subscibers-button {
            display: none!important;
        }
    }
    .hidden {
        display: none;
    }
</style>
