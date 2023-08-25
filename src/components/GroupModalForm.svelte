<!-- GroupForm.svelte -->
<script>
    import Modal from "./Modal.svelte";
    export let groupName = "";
    export let groupDescription = "";
    export let groupUrlName = "";
    export let groupType = "soukroma";
    export let photo;
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    let manualUrlChange = false;

    $: if (!manualUrlChange) {
        groupUrlName = generateUrlName(groupName);
    }

    function generateUrlName(name) {
        return name.toLowerCase().replace(/\s+/g, '_').replace(/[^\w\-]+/g, '');
    }

    function handleUrlNameChange() {
        if (groupUrlName.trim() === "") {
            manualUrlChange = false;
        } else {
            manualUrlChange = true;
        }
    }

    function handleModalClose() {
        dispatch('closeModalForm');
        manualUrlChange = false;  // Resetujeme při zavření okna
    }

    let imageUrl = "./content/obrazek.jpeg";
    let fileInput;

    function setFileInput(node) {
        fileInput = node;
    }
    function handleImageClick() {
        // Aktivování skrytého inputu pro výběr souboru
        fileInput.click();
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            imageUrl = URL.createObjectURL(file);
        }
    }
</script>

<Modal title="New chat group" on:close={handleModalClose}>
    <div class="multipart-message">
        <div class="element">
            <div class="image-container">
                <img class="photo-circle" src={imageUrl} alt="Example Image" on:click={handleImageClick} style="cursor: pointer;"/>
                <input type="file" bind:files={photo} use:setFileInput on:change={handleFileChange} style="display: none;" />
            </div>
        </div>

        <div class="element">
            <label class="element" for="groupName">Name group:</label>
            <input class="element" type="text" id="groupName" bind:value={groupName}>
        </div>

        <div class="element">
            <label class="element" for="groupDescription">Description:</label>
            <input class="element" type="text" id="groupDescription" bind:value={groupDescription}>
        </div>

        <div class="element">
            <label class="element" for="groupUrlName">URL friendly name:</label>
            <input class="element" type="text" id="groupUrlName" bind:value={groupUrlName} on:input={handleUrlNameChange}>
        </div>

        <div class="element">
            <label class="element" for="groupType">Chat group type:</label>
            <select class="element" id="groupType" bind:value={groupType}>
                <option class="element" value="soukroma">Private</option>
                <option class="element" value="verejna">Public</option>
            </select>
        </div>
        <div class="element"><button on:click={() => console.log("Group added!")}>Add chat group</button></div>
    </div>
</Modal>
