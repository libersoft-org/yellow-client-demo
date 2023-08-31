<script>
    import Modal from "./Modal.svelte";
    import {onMount} from "svelte";
    import {each} from "svelte/internal";

    export let showModal = false;
    export let classes = 'modal-body-black';

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

    let containerWidth;
    let containerHeight;
    let itemWidth;
    let itemHeight;
    onMount(() => {
        const closeHandler = (event) => {
            if (event.detail === id) {
                // Zavřete tuto komponentu
                document.querySelector(`${id}`).click();
            }
        };
        // Initial calculation
        adjustGridDimensions();

        // Add event listener for window resize
        window.addEventListener('resize', adjustGridDimensions);
        document.addEventListener('closeToggleComponent', closeHandler);
        return () => {
            document.removeEventListener('closeToggleComponent', closeHandler);
            window.removeEventListener('resize', adjustGridDimensions);

        };
    });

    function adjustGridDimensions() {
        const container = document.querySelector('.profile-main');

        // Reset the container to its max dimensions first
        container.style.width =  `${(window.visualViewport.width)}px`;
        container.style.height = `${(window.visualViewport.height- 125)}px`;
        container.style.gridTemplateColumns = "repeat(4, 1fr)"; // Reset to default 4 columns

        containerWidth = container.offsetWidth;
        containerHeight = container.offsetHeight;

        // Calculate width and height for grid items
        itemWidth = (containerWidth / 4);
        itemHeight = (itemWidth * 9 / 16); // To maintain 16:9 aspect ratio

        // Check if the total height of items exceeds the container height
        if (itemHeight * 4 > containerHeight) {
            itemHeight = (containerHeight / 4);
            itemWidth = (itemHeight * 16 / 9);
        }

        // Check if the container width is less than 1/8 of its height
        if ((itemHeight * 4) < (containerHeight / 2)) {
            // Adjust for 2 columns and 8 rows
            container.style.gridTemplateColumns = "repeat(2, 1fr)";

            // Recalculate width and height for grid items
            itemWidth = (containerWidth / 2);
            itemHeight = (itemWidth * 9 / 16); // To maintain 16:9 aspect ratio

            // Check if the total height of items exceeds the container height
            if (itemHeight * 8 > containerHeight) {
                itemHeight = (containerHeight / 8);
                itemWidth = (itemHeight * 16 / 9);
            }
        }

        // Set the container dimensions based on the item dimensions
        container.style.width = `${itemWidth * (container.style.gridTemplateColumns === "repeat(2, 1fr)" ? 2 : 4)}px`;
        container.style.height = `${itemHeight * (container.style.gridTemplateColumns === "repeat(2, 1fr)" ? 8 : 4)}px`;

        let imgsContainers = document.querySelectorAll('.profile-photo-container');
        imgsContainers.forEach(imgContainer => {
            imgContainer.style.width = `${itemWidth}px`;
            imgContainer.style.height = `${itemHeight}px`;
        });
    }


    function adjustGridDimensionsStandard() {
        const container = document.querySelector('.profile-main');

        // Set the container to its max dimensions first
        container.style.width = '100%';
        container.style.height = 'calc(100vh - 150px)';

        containerWidth = container.offsetWidth;
        containerHeight = container.offsetHeight;

        // Calculate width and height for grid items
        itemWidth = (containerWidth / 4);
        itemHeight = (itemWidth * 9 / 16); // To maintain 16:9 aspect ratio

        // Check if the total height of items exceeds the container height
        if (itemHeight * 4 > containerHeight) {
            itemHeight = (containerHeight / 4);
            itemWidth = (itemHeight * 16 / 9);
        }

        // Set the container dimensions based on the item dimensions
        container.style.width = `${itemWidth * 4}px`;
        container.style.height = `${itemHeight * 4}px`;

        let imgsContainers = document.querySelectorAll('.profile-photo-container');
        imgsContainers.forEach(imgContainer => {
            imgContainer.style.width = `${itemWidth}px`;
            imgContainer.style.height = `${itemHeight}px`;
        });
    }
</script>


<Modal overlay=true title="Video meeting" classes="{classes}" on:close={closeModal}>
    <div class="meeting-main">
    <div class="profile-main">

        {#each Array(4).fill() as _, row}

            {#each Array(4).fill() as _, col}
                <div class="profile-photo-container">
                    <div class="photo-pad">
                        {#if row * 4 + col < 14}

                            <img class="" src="./content/{row*4+col+1}.avif"
                                 alt="Profile Photo">

                        {:else }
                            <img class="" src="./content/{row*4+col+1}.jpg"
                                 alt="Profile Photo">
                        {/if}
                    </div>
                </div>
            {/each}

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
    </div>
</Modal>

<style>
    .meeting-main {
        width:auto;
        height:auto;
        overflow: hidden;
        position: relative;
        top:50%;
        transform: translateY(-50%);
    }
    .profile-main {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 0px;
        max-width: 100%;
        max-height: calc(100vh - 150px);
        margin: auto; /* Center the container horizontally */
        position: relative;
    }

    .profile-photo-container {
        width: 25%;
        height: 25%;
        overflow: hidden;
    }

    .profile-photo-container .photo-pad img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        border: 2px solid #2d2d2d;
        box-sizing: border-box;

    }

    .profile-photo-container .photo-pad {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        overflow: hidden;
        padding: 2px;

        box-sizing: border-box;
    }

    .profile-menu {
        overflow: hidden;
        box-sizing: border-box;
        /*height: 200px;*/
        display: flex;
        flex-direction: row;
        justify-content: center;
        /* box-shadow: 0 0 8px 2px #1d1d1d3d; */
        top: 32px;
        z-index: 101;
        margin-left: auto;
        margin-right: auto;
        margin-top: 24px;
        margin-bottom: 16px;
    }

    .profile-menu .element {
        border-radius: 0px;

        max-height: 48px;

    }

    .profile-menu .element {
        width: auto;
        display: flex; /* Opravený překlep */
        align-items: center; /* Zarovnání položek vertikálně do středu */
        justify-content: center; /* Ikonu vlevo a tlačítko vpravo */
        /*background-color: var(--primary-color-p35); */
        /*border: 1px solid var(--primary-color-p35);*/
        height: 64px;
        width: 64px;
        margin: 0px 0px 0px 0px;
        color: #1d1d1d;
        box-sizing: border-box;;
    }

    .profile-menu .element:hover {
        border-radius: 10px;
        background-color: var(--primary-color-35);
    }

    .imgdiv {
        width: 40px;
        height: 40px;
        padding: 5px;
        cursor: pointer;
    }

    .imgdiv img {
        width: 100%;
        height: 100%;
    }

    .toggle-animation {
        transition: all 0.2s;
    }

</style>
