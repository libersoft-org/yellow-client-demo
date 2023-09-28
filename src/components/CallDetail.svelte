<script>
    import { onMount } from 'svelte';
    import { callSelected } from '../stores/mainstore.js';
    import { openComponentsStack } from '../stores/openComponentsStack.js';
    import MessagesList from './MessagesList.svelte';
    import { activeCallIdStore } from '../stores/mainstore.js';
    import ProfileDetail from "./ProfileDetail.svelte";
    let visible = true;
    let storeSize;
    openComponentsStack.subscribe((value) => {
        storeSize = value.length;
    });

    let isCallSelected = false;
    let callId;

    callSelected.subscribe((value) => {
        isCallSelected = value;
    });

    activeCallIdStore.subscribe((value) => {
        callId = value;
    });
    onMount(() => {
        function handleKeydown(event) {
            if (event.key === 'Escape' && storeSize == 0) {
                callSelected.set(false);
                activeCallIdStore.set(null);
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
</script>

<div class="conversation-detail">
    {#if isCallSelected}
        <div class="parent-div">
            <div class="date-info-container">
                <div class="messages__info__date">17 May 2023</div>
            </div>
            <div class="child-div">
                <div class="div1"><img class="arrow-icon" src="./img/icons_new/call_incoming_noback.svg"/></div>
                <div class="div2">10:25:00 - 10:27:30</div>
                <div class="div3">2:30</div>
            </div>
            <div class="child-div">
                <div class="div1"><img class="arrow-icon" src="./img/icons_new/call_outgoing_noback.svg"/></div>
                <div class="div2">9:20:00 - 9:20:00</div>
                <div class="div3">0:00</div>
            </div>
            <div class="child-div">
                <div class="div1"><img class="arrow-icon" src="./img/icons_new/call_incoming_noback.svg"/></div>
                <div class="div2">8:25:00 - 8:35:30</div>
                <div class="div3">10:30</div>
            </div>
            <div class="child-div">
                <div class="div1"><img class="arrow-icon" src="./img/icons_new/call_outgoing_noback.svg"/></div>
                <div class="div2">7:00:00 - 7:00:00</div>
                <div class="div3">0:00</div>
            </div>
            <div class="date-info-container">
                <div class="messages__info__date">15 May 2023</div>
            </div>
            <div class="child-div">
                <div class="div1"><img class="arrow-icon" src="./img/icons_new/call_incoming_noback.svg"/></div>
                <div class="div2">10:25:00 - 10:27:30</div>
                <div class="div3">2:30</div>
            </div>
            <div class="child-div">
                <div class="div1"><img class="arrow-icon" src="./img/icons_new/call_incoming_noback.svg"/></div>
                <div class="div2">9:20:00 - 9:20:00</div>
                <div class="div3">0:00</div>
            </div>
            <div class="child-div">
                <div class="div1"><img class="arrow-icon" src="./img/icons_new/call_outgoing_noback.svg"/></div>
                <div class="div2">8:25:00 - 8:35:30</div>
                <div class="div3">10:30</div>
            </div>
            <div class="child-div">
                <div class="div1"><img class="arrow-icon" src="./img/icons_new/call_outgoing_noback.svg"/></div>
                <div class="div2">7:00:00 - 7:00:00</div>
                <div class="div3">0:00</div>
            </div>
            <div class="date-info-container">
                <div class="messages__info__date">14 May 2023</div>
            </div>
            <div class="child-div">
                <div class="div1"><img class="arrow-icon" src="./img/icons_new/call_incoming_noback.svg"/></div>
                <div class="div2">10:25:00 - 10:27:30</div>
                <div class="div3">2:30</div>
            </div>
            <div class="child-div">
                <div class="div1"><img class="arrow-icon" src="./img/icons_new/call_incoming_noback.svg"/></div>
                <div class="div2">9:20:00 - 9:20:00</div>
                <div class="div3">0:00</div>
            </div>
            <div class="child-div">
                <div class="div1"><img class="arrow-icon" src="./img/icons_new/call_outgoing_noback.svg"/></div>
                <div class="div2">8:25:00 - 8:35:30</div>
                <div class="div3">10:30</div>
            </div>
            <div class="child-div">
                <div class="div1"><img class="arrow-icon" src="./img/icons_new/call_incoming_noback.svg"/></div>
                <div class="div2">7:00:00 - 7:00:00</div>
                <div class="div3">0:00</div>
            </div>
            <div class="date-info-container">
                <div class="messages__info__date">12 May 2023</div>
            </div>
            <div class="child-div">
                <div class="div1"><img class="arrow-icon" src="./img/icons_new/call_incoming_noback.svg"/></div>
                <div class="div2">10:25:00 - 10:27:30</div>
                <div class="div3">2:30</div>
            </div>
            <div class="child-div">
                <div class="div1"><img class="arrow-icon" src="./img/icons_new/call_incoming_noback.svg"/></div>
                <div class="div2">9:20:00 - 9:20:00</div>
                <div class="div3">0:00</div>
            </div>
            <div class="child-div">
                <div class="div1"><img class="arrow-icon" src="./img/icons_new/call_outgoing_noback.svg"/></div>
                <div class="div2">8:25:00 - 8:35:30</div>
                <div class="div3">10:30</div>
            </div>
            <div class="child-div">
                <div class="div1"><img class="arrow-icon" src="./img/icons_new/call_outgoing_noback.svg"/></div>
                <div class="div2">7:00:00 - 7:00:00</div>
                <div class="div3">0:00</div>
            </div>
        </div>
    {:else}
        <div class="centered-message" class:invisible={isCallSelected}>
            Please select your contact...
        </div>
    {/if}
</div>

<style>
    .parent-div {
        margin: 64px;
        width: 50%;
        min-width: 400px;
    }

    .date-info-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 64px; /* Výška kontejneru, můžete upravit podle potřeby */
    }

    .messages__info__date {
        text-align: center;
        width: auto;
        margin: 0; /* Odebrání marginu, protože nyní používáme flexbox pro centrování */
    }

    .child-div {
        width: 100%;
        height: 32px;
        display: flex;
        padding: 4px;
        justify-content: space-between;
    }

    .child-div:nth-child(odd) {
        background-color: var(--primary-color-p44);
    }

    .child-div:nth-child(even) {
        background-color: var(--primary-color-p35);
    }

    .child-div > div {
        display: flex;
        align-items: center;
    }

    .child-div img {
        width: 100%;
        height: 100%;
    }

    .div1, .div3 {
        flex: 1;
    }

    .div2 {
        flex: 2;
    }
</style>
