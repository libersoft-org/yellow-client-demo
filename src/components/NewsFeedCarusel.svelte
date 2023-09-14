<script>
import VideoModuletemplates from "./VideoModuleTemplates.svelte";
import Carousel from "svelte-carousel";
let carpos1 = 0;
</script>
<div class="main-cont">
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

                <div class="carousel-item">
                    <div class="photo-video-info">
                        <div class="conversation__user-photo">
                            <img
                                    class="photo-circle photo-circle--medium hasnew"
                                    src="https://i.pravatar.cc/300?u=user1"
                                    alt="https://i.pravatar.cc/300?u=user1"
                            />
                        </div>
                        <div class="conversation__info">
                            <div class="conversation__info__user-name">NewUser</div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="photo-video-info">
                        <div class="conversation__user-photo">
                            <img
                                    class="photo-circle photo-circle--medium hasnew"
                                    src="https://i.pravatar.cc/300?u=user2"
                                    alt="https://i.pravatar.cc/300?u=user2"
                            />
                        </div>
                        <div class="conversation__info">
                            <div class="conversation__info__user-name">Adam</div>
                        </div>
                    </div>                </div>
                <div class="carousel-item">
                    <div class="photo-video-info">
                        <div class="conversation__user-photo">
                            <img
                                    class="photo-circle photo-circle--medium"
                                    src="https://i.pravatar.cc/300?u=user3"
                                    alt="https://i.pravatar.cc/300?u=user3"
                            />
                        </div>
                        <div class="conversation__info">
                            <div class="conversation__info__user-name">Boris</div>
                        </div>
                    </div>                </div>

                <div class="carousel-item">
                    <div class="photo-video-info">
                        <div class="conversation__user-photo">
                            <img
                                    class="photo-circle photo-circle--medium hasnew"
                                    src="https://i.pravatar.cc/300?u=user4"
                                    alt="https://i.pravatar.cc/300?u=user4"
                            />
                        </div>
                        <div class="conversation__info">
                            <div class="conversation__info__user-name">T-1000</div>
                        </div>
                    </div>                </div>
                <div class="carousel-item">
                    <div class="photo-video-info">
                        <div class="conversation__user-photo">
                            <img
                                    class="photo-circle photo-circle--medium hasnew"
                                    src="https://i.pravatar.cc/300?u=user5"
                                    alt="https://i.pravatar.cc/300?u=user5"
                            />
                        </div>
                        <div class="conversation__info">
                            <div class="conversation__info__user-name">Matador</div>
                        </div>
                    </div>                </div>
                <div class="carousel-item">
                    <div class="photo-video-info">
                        <div class="conversation__user-photo">
                            <img
                                    class="photo-circle photo-circle--medium hasnew"
                                    src="https://i.pravatar.cc/300?u=user6"
                                    alt="https://i.pravatar.cc/300?u=user6"
                            />
                        </div>
                        <div class="conversation__info">
                            <div class="conversation__info__user-name">Carl Jung</div>
                        </div>
                    </div>                </div>
                <div class="carousel-item">
                    <div class="photo-video-info">
                        <div class="conversation__user-photo">
                            <img
                                    class="photo-circle photo-circle--medium hasnew"
                                    src="https://i.pravatar.cc/300?u=user7"
                                    alt="https://i.pravatar.cc/300?u=user7"
                            />
                        </div>
                        <div class="conversation__info">
                            <div class="conversation__info__user-name">Sauron</div>
                        </div>
                    </div>                </div>
                <div class="carousel-item">
                    <div class="photo-video-info">
                        <div class="conversation__user-photo">
                            <img
                                    class="photo-circle photo-circle--medium"
                                    src="https://i.pravatar.cc/300?u=user8"
                                    alt="https://i.pravatar.cc/300?u=user8"
                            />
                        </div>
                        <div class="conversation__info">
                            <div class="conversation__info__user-name">Noname</div>
                        </div>
                    </div>                </div>
                <div class="carousel-item">
                    <div class="photo-video-info">
                        <div class="conversation__user-photo">
                            <img
                                    class="photo-circle photo-circle--medium hasnew"
                                    src="https://i.pravatar.cc/300?u=user9"
                                    alt="https://i.pravatar.cc/300?u=user9"
                            />
                        </div>
                        <div class="conversation__info">
                            <div class="conversation__info__user-name">Very Long Name</div>
                        </div>
                    </div>                </div>

                <div class="carousel-item">
                    <div class="photo-video-info">
                        <div class="conversation__user-photo">
                            <img
                                    class="photo-circle photo-circle--medium"
                                    src="https://i.pravatar.cc/300?u=user10"
                                    alt="https://i.pravatar.cc/300?u=user10"
                            />
                        </div>
                        <div class="conversation__info">
                            <div class="conversation__info__user-name">Dot Com</div>
                        </div>
                    </div>                </div>
                <div class="carousel-item">
                    <div class="photo-video-info">
                        <div class="conversation__user-photo">
                            <img
                                    class="photo-circle photo-circle--medium"
                                    src="https://i.pravatar.cc/300?u=user11"
                                    alt="https://i.pravatar.cc/300?u=user11"
                            />
                        </div>
                        <div class="conversation__info">
                            <div class="conversation__info__user-name">Old One</div>
                        </div>
                    </div>                </div>
                <div class="carousel-item">
                    <div class="photo-video-info">
                        <div class="conversation__user-photo">
                            <img
                                    class="photo-circle photo-circle--medium hasnew"
                                    src="https://i.pravatar.cc/300?u=user12"
                                    alt="https://i.pravatar.cc/300?u=user12"
                            />
                        </div>
                        <div class="conversation__info">
                            <div class="conversation__info__user-name">Noname</div>
                        </div>
                    </div>                </div>
                <div class="carousel-item">
                    <div class="photo-video-info">
                        <div class="conversation__user-photo">
                            <img
                                    class="photo-circle photo-circle--medium"
                                    src="https://i.pravatar.cc/300?u=user13"
                                    alt="https://i.pravatar.cc/300?u=user13"
                            />
                        </div>
                        <div class="conversation__info">
                            <div class="conversation__info__user-name">Winnie</div>
                        </div>
                    </div>                </div>
                <div class="carousel-item">
                    <div class="photo-video-info">
                        <div class="conversation__user-photo">
                            <img
                                    class="photo-circle photo-circle--medium hasnew"
                                    src="https://i.pravatar.cc/300?u=user14"
                                    alt="https://i.pravatar.cc/300?u=user14"
                            />
                        </div>
                        <div class="conversation__info">
                            <div class="conversation__info__user-name">For sale</div>
                        </div>
                    </div>                </div>
                <div class="carousel-item">
                    <div class="photo-video-info">
                        <div class="conversation__user-photo">
                            <img
                                    class="photo-circle photo-circle--medium"
                                    src="https://i.pravatar.cc/300?u=user15"
                                    alt="https://i.pravatar.cc/300?u=user15"
                            />
                        </div>
                        <div class="conversation__info">
                            <div class="conversation__info__user-name">Another</div>
                        </div>
                    </div>                </div>

                <div class="carousel-item">
                    <div class="photo-video-info">
                        <div class="conversation__user-photo">
                            <img
                                    class="photo-circle photo-circle--medium"
                                    src="https://i.pravatar.cc/300?u=user16"
                                    alt="https://i.pravatar.cc/300?u=user16"
                            />
                        </div>
                        <div class="conversation__info">
                            <div class="conversation__info__user-name">Peter</div>
                        </div>
                    </div>                </div>
                <div class="carousel-item">
                    <div class="photo-video-info">
                        <div class="conversation__user-photo">
                            <img
                                    class="photo-circle photo-circle--medium hasnew"
                                    src="https://i.pravatar.cc/300?u=user17"
                                    alt="https://i.pravatar.cc/300?u=user17"
                            />
                        </div>
                        <div class="conversation__info">
                            <div class="conversation__info__user-name">Zed</div>
                        </div>
                    </div>                </div>

                <div class="carousel-item">
                    <div class="photo-video-info">
                        <div class="conversation__user-photo">
                            <img
                                    class="photo-circle photo-circle--medium hasnew"
                                    src="https://i.pravatar.cc/300?u=user18"
                                    alt="https://i.pravatar.cc/300?u=user18"
                            />
                        </div>
                        <div class="conversation__info">
                            <div class="conversation__info__user-name">Avatar</div>
                        </div>
                    </div>                </div>


                <div class="car1-n" slot="next" on:click={showNextPage}></div>
            </Carousel>
        </div>
    </div>
    <div class="forw-button">
        <a class="icon" class:hidden={carpos1>6}
           on:click="{()=>{carpos1+=1;document.querySelector('.car1-n').click()}}" alt="search"><img
                src="img/icons/icon_forw.svg" alt="search"/></a>
    </div>
</div>
</div>
<style>
    .main-cont {
        container-name: mcc;
        container-type: inline-size;
        width:calc(100% - 32px);
        margin: 0 auto;
        max-width: var(--container-max-width);
    }
    @container mcc (max-width:540px) {
        .container-for-carousel {
            margin:32px -12px!important;
            width: calc(100% + 24px)!important;
        }

    }
    .container-for-carousel {
        display: flex;
        width: calc(100%);
        align-items: center;
        border-radius: 10px;

    }
    .carousel-container {
        width: 1728px;
        overflow: hidden;
    }
    .carousel-pack {
        width: calc(100%);
        overflow: hidden;

    }
    .carousel-item {
        width: 96px !important;
        min-width: 96px !important;
        height: 128px;
        box-sizing: border-box;
        padding: 2px;
        background-color: transparent;
        align-items: center;
        justify-content: center;
        display: flex;
    }
    .photo-video-info {
        width:96px;
        height:96px;
    }
    .photo-circle--medium {
        width:calc(100% - 16px);
        height:calc(100% - 16px);
        margin:0 8px;
        border: 2px solid transparent;
        padding: 4px;
        box-sizing: border-box;
    }
    .conversation__user-photo {
    }
    .conversation__info {
        height:24px;
        display: inline-grid;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        font-size: 16px;
        width:100%;
    }
    .conversation__info__user-name {

        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        height:24px;
        margin:0;
        padding:0;

    }
    .back-button {
        width:40px;
        height:40px;
        margin-top: 8px;
    }
    .forw-button {
        width:40px;
        height:40px;
        margin-top: 8px;
    }

    .back-button a, .forw-button a {
        width:100%;
        height:100%;
        display: inline;
    }
    .back-button img, .forw-button img {
        width:32px;
        height:32px;
    }
    .hasnew {
        background: linear-gradient(white, white) padding-box, linear-gradient(to left, #ce0000, #ce0000, #ce0000) border-box;
        border-radius: 50em;
        border: 4px solid transparent;
    }

    .hidden {
        display: none!important;
    }

</style>