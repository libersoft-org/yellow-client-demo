<script>
    import Modal from "./Modal.svelte";
    import {onMount} from "svelte";
    export let classes='modal-class-width-400px modal-class-height-560px';
    export let showModal = false;

    function closeModal() {
        showModal = false;
    }
    let icon4Src = './img/icons/icon_hangup_n.svg'; // Výchozí zdroj obrázku
    function toggleIcon4() {
        if (icon4Src === './img/icons/icon_hangup_n.svg') {
            icon4Src = './img/icons/icon_call_a.svg';
        } else {
            icon4Src = './img/icons/icon_hangup_n.svg';
        }
    }
    const id = '.icon-controls';

    onMount(() => {
        const closeHandler = (event) => {
            if (event.detail === id) {
                // Zavřete tuto komponentu
                document.querySelector(`${id}`).click();
            }
        };
        document.addEventListener('closeToggleComponent', closeHandler);
        return () => {
            document.removeEventListener('closeToggleComponent', closeHandler);
        };
    });

</script>

    <Modal title="Calling..." classes="{classes}" on:close={closeModal}>
        <div class="profile-main">

            <div class="profile-photo-info">
                <div class="profile-photo-container">
                    <img class="photo-circle photo-circle-large" src="https://i.pravatar.cc/300?u=ownprofile"
                         alt="Profile Photo">
                </div>
                <div class="profile-info">
                    <div class="user-name"><b>Jane Smith</b></div>
                    <div class="user-email">2:56</div>
                </div>
            </div>
            <div class="profile-menu">
                <div class="element">
                    <div class="imgdiv"><img src="./img/icons/icon_screen_share.svg" alt="Icon 1"></div>
                </div>
                <div class="element">
                    <div class="imgdiv"><img src="./img/icons/icon_videocall_filled.svg" alt="Icon 2"></div>
                </div>
                <div class="element">
                    <div class="imgdiv"><img src="./img/icons/icon_micro_n.svg" alt="Icon 3"></div>
                </div>
                <div class="element toggle-animation" on:click={toggleIcon4}>
                    <div class="imgdiv"><img src="{icon4Src}" alt="Icon 4"></div>
                </div>
            </div>
        </div>
    </Modal>
<style>
    .profile-menu {
        min-width:222px;
        max-width: 222px;
        overflow: hidden;
        box-sizing: border-box;
        /*height: 200px;*/
        display: flex;
        flex-direction: row;
        justify-content: center;
        /* box-shadow: 0 0 8px 2px #1d1d1d3d; */
        top:32px;
        z-index: 101;
        margin-left: auto;
        margin-right: auto;
        margin-top:16px;
    }
    .profile-menu .element {
        border-radius: 0px;

        max-height: 48px;

    }
    .profile-menu .element {
        width: auto;
        display: flex; /* Opravený překlep */
        align-items: center; /* Zarovnání položek vertikálně do středu */
        justify-content: flex-start; /* Ikonu vlevo a tlačítko vpravo */
        /*background-color: var(--primary-color-p35); */
        /*border: 1px solid var(--primary-color-p35);*/
        height: 64px;
        width: 64px;
        margin: 0px 0px 0px 0px;
        color: #1d1d1d;
        cursor: pointer;
    }
    .profile-menu .element:hover {
    }
    .imgdiv {
        width: 40px;
        height: 40px;
        padding: 4px;

    }
    .imgdiv img {
        width:100%;
        height:100%;
    }
    .icon .icon-controls {

    }
    .noShadow {
        box-shadow: none;
        -webkit-box-shadow: none;
    }
    .conversation-user__photo, .conversation-user__detail {
        cursor: pointer;
    }
    .profile-main {
       margin: 24px;
        display: flex;
        flex-direction: column;
    }
    .profile-main .profile-photo-info {
        width:100%;
        display:flex;
        flex-direction: column;
        align-items: center;

    }
    .profile-main .profile-photo-info .profile-info {
        text-align: center;
        margin-top:10px;
        margin-bottom:10px;
    }
    .profile-main .profile-photo-info .profile-info .user-name {
        font-size:1.5em;
    }
    .profile-main .profile-photo-info .profile-photo-container {
        padding: 5px 5px 15px 5px;
        width: 210px;

    }
    .profile-main .profile-photo-info .profile-photo-container img {
        box-shadow: var(--basic-shadow);
    }
    .profile-main .profile-photo-info .profile-photo-container img {
        width:100%;
        height:100%;
    }
    .height-auto {
        height:auto;
    }
    .toggle-animation {
        transition: all 0.2s;
    }

</style>
