

<script>
import ToggleComponent from "./ToggleComponent.svelte";


let visible = false;

function selectAttachment(attachment) {
  console.log(attachment);
  visible = false;
}

</script>




<style>
    .imgdiv {
        width: 24px;
        height: 24px;
        padding: 4px;
    }


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

    .element {
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

    .video-description a {
        text-decoration: none;
    }

</style>



<div class="element" on:click={() => visible = !visible} >More actions...</div>

  {#if visible}
	  <div style="position: absolute; top: 200; right: 0; z-index: 0; background: white; border: 1px solid black; border-radius: 10px; padding: 8px;">
  
  
          <div class="element">
              
              <div><span>E-shop</span></div>
          </div>
          <div class="element">
              
              <div><span>Profile</span></div>
          </div>
          <div class="element">
              
              <div><span>Send message</span></div>
          </div>
          <div class="element">
              
              <div><span>Call us</span></div>
          </div>
          <div class="element">
              
              <div><span>Crowdfunding</span></div>
          </div>
          <div class="element">
              
              <div><span>Our forum</span></div>
          </div>
  
          <div class="element">
              
              <div><span>Donations</span></div>
          </div>
          <div class="element">
              
              <div><span>Marketplace</span></div>
          </div>
          <div class="element">
              
              <div><span>Events</span></div>
          </div>
          <div class="element">
              
              <div><span>Calendar</span></div>
          </div>
    
  
    </div>
		
  {/if}
