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
    function setMaxWidth() {
        const containers = document.querySelectorAll('.profile-photo-container');
        containers.forEach(container => {
            const height = container.offsetHeight; // Získá aktuální výšku prvku
            const maxWidth = (height / 9) * 16; // Vypočítá max-width podle aktuální výšky
            container.style.width = `${maxWidth}px`; // Nastaví max-width
        });
    }

    onMount(() => {
        const closeHandler = (event) => {
            if (event.detail === id) {
                // Zavřete tuto komponentu
                document.querySelector(`${id}`).click();
            }
        };
        // Zavolá funkci při načtení stránky
        window.addEventListener('load', setMaxWidth);

// Zavolá funkci při změně velikosti okna
        window.addEventListener('resize', setMaxWidth);
        document.addEventListener('closeToggleComponent', closeHandler);
        return () => {
            document.removeEventListener('closeToggleComponent', closeHandler);
            window.removeEventListener('resize', setMaxWidth);
            window.removeEventListener('load', setMaxWidth);
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
                    </div>
                {/each}
            </div>
        {/each}
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
        <div class="element">
            <div class="imgdiv"><img src="./img/icons/icon_chat.svg" alt="Chat"></div>
        </div>
        <div class="element toggle-animation" on:click={toggleIcon4}>
            <div class="imgdiv"><img src="{icon4Src}" alt="Icon 4"></div>
        </div>
    </div>
</Modal>

<style>
    .row {
        width: auto; /* nebo pevná hodnota, např. 800px */
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0 auto;
        height:25%;
    }

    .profile-photo-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        max-width: 25%;
        overflow: hidden;
        padding: 0;
        margin: 2px;
        max-height:18vh;
        width: 25%; /* Rozdělíme šířku na čtyři sloupce */
        height: 100%; /* Výška bude odpovídat výšce řádku */
    }

    .profile-photo-info .profile-photo-container {
        position: relative;
        display: inline-block;
        width: 25vw;
        overflow: hidden;
        height: 100%;
        border-radius: 10px;
        border:2px solid #2d2d2d;
        max-width: calc(15vh/0.565);
    }

    .profile-photo-container img {
        position: absolute;
        top: 50%;
        left: 50%;
        max-width: 100%; /* Maximální šířka obrázku je 100% šířky kontejneru */
        max-height: 100%; /* Maximální výška obrázku je 100% výšky kontejneru */
        object-fit: contain; /* Obrázek se přizpůsobí kontejneru a zachová svůj poměr stran */
        transform: translate(-50%, -50%); /* Vycentrování obrázku */
    }

    .profile-main {
        height: calc(100vh - 150px); /* Odečteme výšku titulku a dolního menu */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 auto;
        width: fit-content;
    }

    .profile-photo-info {
        width: 25%; /* Rozdělíme šířku na čtyři sloupce */
        height: 100%; /* Výška bude odpovídat výšce řádku */
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
