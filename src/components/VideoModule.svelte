<script>
    import { onMount } from 'svelte';
    import { videoSelected } from '../stores/mainstore.js';
    import { openComponentsStack } from '../stores/openComponentsStack.js';
    import { activeVideoIdStore } from '../stores/mainstore.js';
    import Carousel from 'svelte-carousel';
    import VideoModuletemplates from "./VideoModuleTemplates.svelte";

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
    let videoCItem  = [];
    videoCItem[0] = {} ;
    videoCItem[0].id =1;
    videoCItem[0].message = '---';
    videoCItem[0].name= 'Yellow development';
    videoCItem[0].channel = 'yellow news';
    videoCItem[0].imageUrl ='img/icons/icon_nemp_v3.svg';
    videoCItem[0].preview ='content/obrazek.jpeg';
    videoCItem[0].views = 1000;
    videoCItem[0].like = 250;
    videoCItem[0].dislike = 100;

    videoCItem[1] = {} ;

    videoCItem[1].id =2;
    videoCItem[1].message = '---';
    videoCItem[1].name= 'Libersoft ';
    videoCItem[1].channel = 'yellow annoncements';
    videoCItem[1].imageUrl ='img/icons/icon_nemp_v1.svg';
    videoCItem[1].preview ='content/poster.png';
    videoCItem[1].views = 1500;
    videoCItem[1].like = 257;
    videoCItem[1].dislike = 10;

    videoCItem[2] = {} ;

    videoCItem[2].id =1;
    videoCItem[2].message = '---';
    videoCItem[2].name= 'Hispter\'s world';
    videoCItem[2].channel = 'Tears of world peace';
    videoCItem[2].imageUrl ='img/icons/icon_nemp_v4.svg';
    videoCItem[2].preview ='content/obrazek.jpeg';
    videoCItem[2].views = 10000;
    videoCItem[2].like = 0;
    videoCItem[2].dislike = 100;

    videoCItem[3] = {} ;
    videoCItem[3].id =1;
    videoCItem[3].message = '---';
    videoCItem[3].name= 'Yellow development';
    videoCItem[3].channel = 'yellow news';
    videoCItem[3].imageUrl ='img/icons/icon_chat.svg';
    videoCItem[3].preview ='content/obrazek2.jpeg';
    videoCItem[3].views = 1000;
    videoCItem[3].like = 250;
    videoCItem[3].dislike = 100;

    videoCItem[4] = {} ;

    videoCItem[4].id =2;
    videoCItem[4].message = '---';
    videoCItem[4].name= 'Libersoft ';
    videoCItem[4].channel = 'yellow annoncements';
    videoCItem[4].imageUrl ='img/icons/icon_play.svg';
    videoCItem[4].preview ='content/poster.png';
    videoCItem[4].views = 1500;
    videoCItem[4].like = 257;
    videoCItem[4].dislike = 10;

    videoCItem[5] = {} ;

    videoCItem[5].id =1;
    videoCItem[5].message = '---';
    videoCItem[5].name= 'Hispter\'s world';
    videoCItem[5].channel = 'Tears of world peace';
    videoCItem[5].imageUrl ='img/icons/icon_nemp_v4.svg';
    videoCItem[5].preview ='content/obrazek2.jpeg';
    videoCItem[5].views = 10000;
    videoCItem[5].like = 0;
    videoCItem[5].dislike = 100;

    let videoLItem = [] ;
    videoLItem = videoCItem ;
</script>

<div class="conversation-detail">
    <div class="videomodule-news">
        <div class="videomodule-title">
            <span>Video</span>
            <hr/>
        </div>
    <div class="container-for-carousel">
        <div class="back-button">
            <a class="icon" on:click="{()=>{document.querySelector('.car1-p').click()}}" alt="search"><img src="img/icons/icon_back.svg" alt="search"/></a>
        </div>
        <div class="carousel-pack">
        <div class="carousel-container">
            <Carousel
                    let:showPrevPage
                    let:showNextPage
                    particlesToShow={16} particlesToScroll={1} arrows=false loop>
                <div class="car1-p" slot="prev" on:click={showPrevPage}></div>

                <div class="carousel-item"><VideoModuletemplates message={videoLItem[0]} templateType="video"/></div>
                <div class="carousel-item"><VideoModuletemplates message={videoLItem[1]} templateType="video"/></div>
                <div class="carousel-item"><VideoModuletemplates message={videoLItem[2]} templateType="video"/></div>

                <div class="carousel-item"><VideoModuletemplates message={videoLItem[3]} templateType="video"/></div>
                <div class="carousel-item"><VideoModuletemplates message={videoLItem[4]} templateType="video"/></div>
                <div class="carousel-item"><VideoModuletemplates message={videoLItem[5]} templateType="video"/></div>
                <div class="carousel-item"><VideoModuletemplates message={videoLItem[0]} templateType="video"/></div>
                <div class="carousel-item"><VideoModuletemplates message={videoLItem[1]} templateType="video"/></div>
                <div class="carousel-item"><VideoModuletemplates message={videoLItem[2]} templateType="video"/></div>

                <div class="carousel-item"><VideoModuletemplates message={videoLItem[3]} templateType="video"/></div>
                <div class="carousel-item"><VideoModuletemplates message={videoLItem[4]} templateType="video"/></div>
                <div class="carousel-item"><VideoModuletemplates message={videoLItem[5]} templateType="video"/></div>
                <div class="carousel-item"><VideoModuletemplates message={videoLItem[0]} templateType="video"/></div>
                <div class="carousel-item"><VideoModuletemplates message={videoLItem[1]} templateType="video"/></div>
                <div class="carousel-item"><VideoModuletemplates message={videoLItem[2]} templateType="video"/></div>

                <div class="carousel-item"><VideoModuletemplates message={videoLItem[3]} templateType="video"/></div>





                <div class="car1-n" slot="next" on:click={showNextPage}></div>
            </Carousel>
        </div>
        </div>
        <div class="back-button">
            <a class="icon" on:click="{()=>{document.querySelector('.car1-n').click()}}" alt="search"><img src="img/icons/icon_forw.svg" alt="search"/></a>
        </div>    </div>
    </div>

    <div class="videomodule-live">
        <div class="videomodule-title">
            <span>Live</span>
            <hr/>
        </div>
        <div class="container-for-carousel">
            <div class="back-button">
                <a class="icon" on:click="{()=>{document.querySelector('.car1-p2').click()}}" alt="search"><img src="img/icons/icon_back.svg" alt="search"/></a>
            </div>
            <div class="carousel-pack">
                <div class="carousel-container">
                    <Carousel
                            let:showPrevPage
                            let:showNextPage
                            particlesToShow={16} particlesToScroll={1} arrows=false loop>
                        <div class="car1-p2" slot="prev" on:click={showPrevPage}></div>

                        <div class="carousel-item"><VideoModuletemplates message={videoCItem[0]} templateType="live"/></div>
                        <div class="carousel-item"><VideoModuletemplates message={videoCItem[1]} templateType="live"/></div>
                        <div class="carousel-item"><VideoModuletemplates message={videoCItem[2]} templateType="live"/></div>

                        <div class="carousel-item"><VideoModuletemplates message={videoCItem[3]} templateType="live"/></div>
                        <div class="carousel-item"><VideoModuletemplates message={videoCItem[4]} templateType="live"/></div>
                        <div class="carousel-item"><VideoModuletemplates message={videoCItem[5]} templateType="live"/></div>
                        <div class="carousel-item"><VideoModuletemplates message={videoCItem[0]} templateType="live"/></div>
                        <div class="carousel-item"><VideoModuletemplates message={videoCItem[1]} templateType="live"/></div>
                        <div class="carousel-item"><VideoModuletemplates message={videoCItem[2]} templateType="live"/></div>

                        <div class="carousel-item"><VideoModuletemplates message={videoCItem[3]} templateType="live"/></div>
                        <div class="carousel-item"><VideoModuletemplates message={videoCItem[4]} templateType="live"/></div>
                        <div class="carousel-item"><VideoModuletemplates message={videoCItem[5]} templateType="live"/></div>
                        <div class="carousel-item"><VideoModuletemplates message={videoCItem[0]} templateType="live"/></div>
                        <div class="carousel-item"><VideoModuletemplates message={videoCItem[1]} templateType="live"/></div>
                        <div class="carousel-item"><VideoModuletemplates message={videoCItem[2]} templateType="live"/></div>

                        <div class="carousel-item"><VideoModuletemplates message={videoCItem[3]} templateType="live"/></div>





                        <div class="car1-n2" slot="next" on:click={showNextPage}></div>
                    </Carousel>
                </div>
            </div>
            <div class="back-button">
                <a class="icon" on:click="{()=>{document.querySelector('.car1-n2').click()}}" alt="search"><img src="img/icons/icon_forw.svg" alt="search"/></a>
            </div>    </div>
    </div>


</div>

<style>
    .videomodule-news, .videomodule-live, .videomodule-reels {
        display: block;
        flex-direction: column;
        width: 100%;
        margin: 25px 0;
        position:relative;
        top:64px;
        height:100%;

    }
    .videomodule-news::before {
        content: "";
        position: relative;
        top: 286px;
        left: 40px;
        width: calc(100% - 80px);
        height: 250px;
        background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, 1) 100%);
        pointer-events: none;
        z-index: 50;
    }
    .videomodule-title {
        width:24%;
        height:2em;
        font-weight: bold;
        margin-left:58px;
    }
    .container-for-carousel {
        display: flex;
        margin: 10px 0;
        align-items: center;
        width: 100%;
        overflow: hidden;
        height: 240px;
        padding: 10px 10px 0px 0px;
    }
    .carousel-pack {
        width:100%;
        overflow: hidden
    }
    .carousel-container {
        width:3840px;
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
        width: 324px!important;
        min-width:324px!important;
        height: 240px;
        box-sizing: border-box;
        padding: 2px;
        border: 1px solid #1d1d1d;
        border-radius:10px;
        background-color: #ffffff;
        align-items: center;
        justify-content: center;
        display:flex;
        margin:2px;
    }
    .back-button {
        width:48px;
        height:68px;
        display:flex;
        justify-content: center;
        padding:0;
    }
    .back-button .icon img {
        padding: 0;
        width:48px;height:48px;
    }
    .conversation-detail {
        flex-direction: column;
        align-items: normal;
        justify-content: start;
    }
</style>
