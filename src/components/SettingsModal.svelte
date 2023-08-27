<!-- SettingsModal.svelte -->
<script>
    import Modal from "./Modal.svelte";
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function handleModalClose() {
        dispatch('closeModalForm');
    }
    import PrivateKeysModal from './PrivateKeysModal.svelte'; // Cesta k vaší komponentě

    let showPrivateKeysModal = false;

    function openPrivateKeysModal() {
        showPrivateKeysModal = true;
    }
    function closePrivateKeysModal() {
        showPrivateKeysModal = false;

    }
</script>
<Modal title="Setting" classes="modal-class-width-400px" on:close={handleModalClose}>
    <div class="settings-list">
        <div class="menu__item">
            <img class="menu__item__icon" src="./img/icons/icon_account.svg" alt="My account" />
            My account
        </div>
        <div class="menu__item">
            <img class="menu__item__icon" src="./img/icons/icon_language.svg" alt="Language" />
            Language
        </div>
        <div class="menu__item">
            <img class="menu__item__icon" src="./img/icons/icon_sounds.svg" alt="Notifications" />
            Notifications
        </div>
        <div class="menu__item">
            <img class="menu__item__icon" src="./img/icons/icon_security.svg" alt="Privacy & security" />
            Privacy & security
        </div>
        <div class="menu__item" on:click={openPrivateKeysModal}>
            <img class="menu__item__icon" src="./img/icons/icon_secured.svg" alt="Private keys" />
            Private keys
        </div>
        <div class="menu__item">
            <img class="menu__item__icon" src="./img/icons/icon_videocall_filled.svg" alt="Hardware" />
            Hardware
        </div>
        <div class="menu__item">
            <img class="menu__item__icon" src="./img/icons/icon_theme.svg" alt="Themes" />
            Themes
        </div>
        <div class="menu__item">
            <img class="menu__item__icon" src="./img/icons/icon_newsfeed_filled.svg" alt="Other" />
            Other
        </div>
    </div> s
</Modal>
{#if showPrivateKeysModal}
    <PrivateKeysModal classa=".settings-modal" on:closePModalForm={closePrivateKeysModal}/>
{/if}

<style>
    .settings-list {
        display: flex;
        flex-direction: column;
    }

    .menu__item {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .menu__item__icon {
        width: 40px;
        height: 40px;
    }
</style>
