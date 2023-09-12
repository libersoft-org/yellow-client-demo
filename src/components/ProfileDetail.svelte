<script>
    import {
        activeContactIdStore,
        contactSelected
    } from "../stores/mainstore.js";
    import {actualSMVC} from "../stores/mainstore.js";
    import VideoModule from "./VideoModule.svelte";
    export let contactId;

    function backButtonClick() {
        contactSelected.set(false);
        activeContactIdStore.set(null);
        document.querySelector(`.panel-left`).classList.add('active-panel');
        document.querySelector(`.panel-right`).classList.remove('active-panel');
        window.adjustPanels();
    }
    let selectedSMVC = '';
</script>
<div class="profile-container">
    <div class="profile-detail">
        <!-- První div -->

        <div class="profile-main">
            <!--
            <div class="profile-photo-info">
                <div class="profile-photo-container">
                    <img class="photo-circle photo-circle-large" src="https://i.pravatar.cc/300?u=ownprofile"
                         alt="Profile Photo">
                </div>
                <div class="profile-info">
                    <div class="user-name"><b>Jane Smith</b></div>
                    <div class="user-email">seznam@radsianineznam.cz</div>
                </div>
            </div>
            <div class="profile-menu">
                <div class="element">
                    <div class="imgdiv"><img src="./img/icons/icon_help_n_d.svg" alt="Icon 1"></div>
                    <div><span>Add contact</span></div>
                </div>
                <div class="element">
                    <div class="imgdiv"><img src="./img/icons/icon_help_n_d.svg" alt="Icon 2"></div>
                    <div><span>Follow</span></div>
                </div>
                <div class="element">
                    <div class="imgdiv"><img src="./img/icons/icon_message_n_d.svg" alt="Icon 3"></div>
                    <div><span>Send message</span></div>
                </div>
                <div class="element">
                    <div class="imgdiv"><img src="./img/icons/icon_donations_n_d.svg" alt="Icon 4"></div>
                    <div><span>Donate</span></div>
                </div>
            </div>-->
        </div>
        <!-- Druhý div -->
        <div class="second-container" style="width: 100%;">
            <div class="second-container-semi" style="display: flex; justify-content: space-between;">
                <div class="element">
                    <div class="imgdiv"><img src="./img/icons/icon_newsfeed.svg" alt="Newsfeed Icon"></div>
                    <div><span>Newsfeed</span></div>
                </div>
                <div class="element" class:selected={$actualSMVC==='video'} on:click={()=>{
                    $actualSMVC='video';
                    selectedSMVC = 'video'
                    }}>
                    <div class="imgdiv"><img src="./img/icons/icon_play_out.svg" alt="Video Icon"></div>
                    <div><span>Video</span></div>
                </div>
                <div class="element">
                    <div class="imgdiv"><img src="./img/icons/icon_help_n.svg" alt="Forum Icon"></div>
                    <div><span>Forum</span></div>
                </div>
                <div class="element">
                    <div class="imgdiv"><img src="./img/icons/icon_event_n.svg" alt="Events Icon"></div>
                    <div><span>Events</span></div>
                </div>
                <div class="element">
                    <div class="imgdiv"><img src="./img/icons/icon_help_n.svg" alt="Blog Icon"></div>
                    <div><span>Blog</span></div>
                </div>
                <div class="element">
                    <div class="imgdiv"><img src="./img/icons/icon_help_n.svg" alt="Marketplace Icon"></div>
                    <div><span>Marketplace</span></div>
                </div>
            </div>
            <div class="selected-content">
                {#if $actualSMVC === 'video'}
                    <VideoModule></VideoModule>
                {:else}
                TODO details from profile tabs
                {/if}
            </div>
        </div>
    </div>
</div>
<style>
    .profile-detail {
        margin: 0px 0px 0px 0px;
        width: 100%;
        overflow-x: hidden;
        /* padding-top: 16px; */
    }
    .profile-detail .profile-main {
        display: flex;
        width: 100%;
        overflow: hidden;
        flex-wrap: wrap;
    }

    .profile-container {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .profile-detail .second-container {
        position: relative;
        z-index: 100;
    }
    .profile-detail > div:first-child {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        /*padding: 0 32px 32px 32px;*/

    }

    .profile-detail > div:last-child > div:first-child {
        display: flex;
        justify-content: space-between;
    }

    .second-container-semi {
        display: flex;
        flex-wrap: wrap; /* Povolí zalomení položek flexboxu */
        justify-content: space-between;
        container-type: inline-size;
        box-shadow: var(--basic-shadow);
        background-color: #1d1d1d; /*var(--primary-color-p44); */
    }

    .second-container-semi .element {
        /* min-width: 125px; */
        width: calc(16.6666% - 0px) !important;
        flex-grow: 1;
        flex-basis: calc(16.6666% - 5px);
        max-width: calc(16.6666% - 0px);
        background-color: #1d1d1d;
        color: white;
        font-weight: bold;
        cursor: pointer;

    }
    .second-container-semi .element:hover {
        background-color: #2d2d2d;
    }
    .second-container-semi .element.selected {
        background-color: #3d3d3d;
    }
    @container (max-width: 750px) {
        .element {
            min-width: calc(33.3333% - 0px);
            flex-basis: calc(33.3333% - 2px);
            max-width: calc(33.3333% - 0px);
        }
    }
    .profile-photo-info {
        display: flex;
        overflow: hidden;
        flex-wrap: wrap;
        padding:8px;
    }
    .profile-photo-info .profile-info {
        overflow: hidden;
    }
    .profile-photo-info .profile-info .user-name {
        font-size: 1.2em;
    }
    .profile-photo-info .profile-info .user-email {
        font-size: 1em;
    }
    .profile-photo-container {
        padding: 0px 0px 0px 0px;
        width: 200px;
    }

    .profile-menu {
        flex-grow: 1;
        min-width:200px;
        max-width: 216px;
        overflow: hidden;
        box-sizing: border-box;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .profile-menu .element {
        border-radius: 5px;
        margin: 8px;

        max-height: 32px;
        box-shadow: 0 0 8px 2px #1d1d1d3d;
    }

    .profile-photo-container img {
        width: 200px;
        height: 200px;
        box-shadow: 0 0 8px 2px #1d1d1d3d;
    }

    .element {
        width: auto;
        display: flex; /* Opravený překlep */
        align-items: center; /* Zarovnání položek vertikálně do středu */
        justify-content: flex-start; /* Ikonu vlevo a tlačítko vpravo */
        background-color: var(--primary-color-p44);
        /*border: 1px solid var(--primary-color-p35);*/
        height: 32px;
        margin: 0px 0px 0px 0px;
        flex: 1;
        color: #1d1d1d;
    }
    .element:hover {
        background-color: var(--primary-color-p35);

    }

    .element div {
    }

    .element img {
    }

    .imgdiv {
        width: 32px;
        height: 32px;
    }

    .selected-content {
        margin-top: 25px;
        text-align: center;
    }

    .back-button {
        height: var(--userbar-height);
        display: flex;
        align-items: center;
        padding-left: 10px;
    }

    .back-button a {
        height: var(--userbar-height);
    }

    .back-button img {
        width: 48px;
        height: 48px;
    }
</style>