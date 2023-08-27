<!-- PrivateKeysModal.svelte -->
<script>
    import {createEventDispatcher, onMount} from 'svelte';
    const dispatch = createEventDispatcher();

    import Modal from "./Modal.svelte";

    let qrCodeDataURL;
    let seed;
    let seedArray = []; // Array to hold the seed words
    import { wordlist } from '@scure/bip39/wordlists/english';
    import * as bip39 from '@scure/bip39';

    onMount(async () => {
        // Dynamically import the QRCode library
        const QRCodeImport = await import('qrcode');

        seed = bip39.generateMnemonic(wordlist,256); // Generate 24-word seed using 256 bits of entropy
        seedArray = seed.split(' ');

        qrCodeDataURL = await QRCodeImport.toDataURL(seed); // Seed is already a string, no need to join
    });

    async function regenerateSeed() {
        seed = bip39.generateMnemonic(wordlist,256);
        seedArray = seed.split(' ');

        // Regenerate the QR code with the new seed
        const QRCodeImport = await import('qrcode');
        qrCodeDataURL = await QRCodeImport.toDataURL(seed);
    }

    function handlePModalClose() {
        dispatch('closePModalForm');
    }

    function printSeed() {
        console.log("Printing seed...");
        dispatch('showPrintModal', {
            seed: seed
        });
    }

    function saveSeed() {
        console.log("Seed saved!");
    }

</script>
<Modal title="Private keys" classes=" modal-class-width-400px modal-class-qrmodal" resizeable={false} on:close={handlePModalClose}>
    <div class="multipart-message">
        <table class="seed-table">
            {#each Array(6) as _, rowIndex}
                <tr>
                    {#each Array(4) as _, colIndex}
                        <td>{seedArray[rowIndex * 4 + colIndex]}</td>
                    {/each}
                </tr>
            {/each}
        </table>
        <div class="element image-container">
            <img class="qr-image" src="{qrCodeDataURL}" alt="QR Code for Seed"/>
        </div>
        <div class="buttons-row">
            <button on:click={regenerateSeed}>Regenerate</button>
            <button on:click={handlePModalClose}>Cancel</button>
            <button on:click={printSeed}>Print</button>
            <button on:click={saveSeed}>Save</button>
        </div>
    </div>
</Modal>

<style>
    .modal-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh; /* Full viewport height */
    }

    .seed-table {
        width: 100%;
        border-collapse: collapse;
    }

    .seed-table td {
        border: 1px solid #ddd;
        padding: 5px;
        text-align: center;
    }

    .buttons-row {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .buttons-row button {
        background-color: var(--secondary-color);
        color: #ffffff;
        font-size: 1em;
        margin-right: 4px;
        font-weight: bold;
        cursor: pointer;
        min-width: 80px;
        text-align: center;
        border: 0px;
        border-radius: 10px;
        padding: 10px;
    }

    .full-height-modal {
        height: 100%; /* The window will have the same height as its parent */
    }

    .qr-image {
        width: 300px;
        height: 300px; /* QR code will span the entire width of its container */
    }
</style>
