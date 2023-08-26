<!-- AddAccountModal.svelte -->
<script>
    import Modal from "./Modal.svelte";
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let server = "";
    let userName = "";
    let password = "";

    function handleModalClose() {
        dispatch('closeAddAccountModal');
    }

    function addNewAccount() {
        // Zde můžete přidat logiku pro přidání nového účtu
        console.log("New account added!");
        dispatch('accountAdded', {
            server: server,
            userName: userName,
            password: password  // V praxi byste nikdy neměli logovat heslo!
        });
    }
</script>

<Modal title="Add new account" on:close={handleModalClose}>
    <div class="multipart-message">
        <div class="element">
            <label class="element" for="server">Server:</label>
            <input class="element" type="text" id="server" bind:value={server}>
        </div>

        <div class="element">
            <label class="element" for="userName">User name:</label>
            <input class="element" type="text" id="userName" bind:value={userName}>
        </div>

        <div class="element">
            <label class="element" for="password">Password:</label>
            <input class="element" type="password" id="password" bind:value={password}>
        </div>

        <div class="element">
            <button on:click={addNewAccount}>Add new account</button>
        </div>
    </div>
</Modal>
