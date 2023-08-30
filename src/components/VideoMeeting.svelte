<script>
    import Modal from "./Modal.svelte";
    import {onMount} from "svelte";
    export let showModal = false;
    export let classes='modal-body-black';
    function closeModal() {
        showModal = false;
    }

    const id = '.icon-controls';
    let icon4Src = './img/icons/icon_hangup_n.svg'; // Výchozí zdroj obrázku
    function toggleIcon4() {
        if (icon4Src === './img/icons/icon_hangup_n.svg') {
            icon4Src = './img/icons/icon_call_a.svg';
        } else {
            icon4Src = './img/icons/icon_hangup_n.svg';
        }
    }

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

<Modal overlay= true title="Video meeting" classes="{classes}" on:close={closeModal}>
    <div class="profile-main">

        {#each Array(4).fill() as _, row}
            <div class="row">
                {#each Array(4).fill() as _, col}
                    <div class="profile-photo-info">
                        <div class="profile-photo-container">
                            {#if row*4+col < 14}
                            <img class="" src="./content/{row*4+col+1}.avif"
                                 alt="Profile Photo">
                            {:else }
                            <img class="" src="./content/{row*4+col+1}.jpg"
                                 alt="Profile Photo">
                           {/if}
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
            <div class="imgdiv"><img src="./img/icons/icon_screen_share.svg" alt="Icon 1"></div>
        </div>
        <div class="element">
            <div class="imgdiv"><img src="./img/icons/icon_videocall_filled.svg" alt="Icon 2"></div>
        </div>
        <div class="element">
            <div class="imgdiv"><img src="./img/icons/icon_micro_n.svg" alt="Icon 3"></div>
        </div>
        <div class="element">
            <div class="imgdiv"><img src="./img/icons/icon_chat.svg" alt="Chat"></div>
        </div>
        <div class="element toggle-animation" on:click={toggleIcon4}>
            <div class="imgdiv"><img src="{icon4Src}" alt="Icon 4"></div>
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
        /* padding: 10px;
        width:160px;
        height: 90px;
        max-height: 90px;*/
        max-width: 25%;

        border-radius: 10px;
        border:2px solid #2d2d2d;
        overflow: hidden;
        padding: 0;
        margin: 2px;



    }

    .profile-photo-info .profile-photo-container {
        position: relative;
        width: 100%; /* Můžete nastavit pevnou šířku nebo procentuální šířku podle potřeby */
        padding-bottom: 56.25%; /* Toto je pro poměr stran 16:9 */
        overflow: hidden;
    }

    .profile-photo-container img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ořízne obrázek, aby vyplnil kontejner */
        transform: translate(-50%, -50%); /* Vycentrování obrázku */
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
        margin:0;
    }
    .profile-menu {
        min-width:250px;
        max-width: 250px;
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
        height:64px;
        width: 64px;
        margin: 0px 0px 0px 0px;
        color: #1d1d1d;
    }
    .profile-menu .element:hover {
        background-color: var(--primary-color-p35);
    }
    .imgdiv {
        width: 40px;
        height: 40px;
        padding: 4px;
        cursor: pointer;
    }
    .imgdiv img {
        width:100%;
        height:100%;
    }
    .toggle-animation {
        transition: all 0.2s;
    }

</style>
