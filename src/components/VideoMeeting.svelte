<script>
    import Modal from "./Modal.svelte";
    import {onMount} from "svelte";
    export let classes='modal-class-width-75w modal-class-height-560px';
    export let showModal = false;

    function closeModal() {
        showModal = false;
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

<Modal title="Voice & Video call" classes="{classes}" on:close={closeModal}>
    <div class="profile-main">
        {#each Array(4).fill() as _, row}
            <div class="row">
                {#each Array(4).fill() as _, col}
                    <div class="profile-photo-info">
                        <div class="profile-photo-container">
                            <img class="" src="https://i.pravatar.cc/300?u={col}"
                                 alt="Profile Photo">
                        </div>
                      <!--  <div class="profile-info">
                            <div class="user-name"><b>Jane Smith</b></div>
                        </div> -->
                    </div>
                {/each}
            </div>
        {/each}
    <div class="profile-menu">
        <div class="element">
            <div class="imgdiv"><img src="./img/icons/icon_screen_share.svg" alt="Screen share"></div>
        </div>
        <div class="element">
            <div class="imgdiv"><img src="./img/icons/icon_cam.svg" alt="Camera"></div>
        </div>
        <div class="element">
            <div class="imgdiv"><img src="./img/icons/icon_micro.svg" alt="Microphone"></div>
        </div>
        <div class="element">
            <div class="imgdiv"><img src="./img/icons/icon_chat.svg" alt="Chat"></div>
        </div>
        <div class="element">
            <div class="imgdiv"><img src="./img/icons/icon_hangup.svg" alt="Hang up"></div>
        </div>
    </div>
    </div>
</Modal>

<style>
    .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    .profile-photo-info {
        flex: 1; /* Rozložení rovnoměrně přes celou šířku rodičovského kontejneru */
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        /* padding: 10px; */
        max-width:150px;
        max-height: 150px;
        height: auto;

    }

    .profile-photo-info .profile-photo-container {
        width: 80%; /* Zmenšení šířky kontejneru fotky */
        padding: 5px;
        display: flex;
        justify-content: center;
    }

    .profile-photo-info .profile-photo-container img {
        box-shadow: var(--basic-shadow);
        width:160px; /* Zajistí, že obrázek nebude větší než kontejner */
        max-height: 90px;
    }

    .profile-photo-info .profile-info {
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .profile-photo-info .profile-info {
        font-size: 0.8em;
    }
    .row {
        width:100%;
    }
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
        height: 40px;
        width: 40px;
        margin: 0px 0px 0px 0px;
        color: #1d1d1d;
    }
    .profile-menu .element:hover {
        background-color: var(--primary-color-p35);
    }
    .imgdiv {
        width: 24px;
        height: 24px;
        padding: 8px;
    }
    .imgdiv img {
        width:100%;
        height:100%;
    }
</style>
