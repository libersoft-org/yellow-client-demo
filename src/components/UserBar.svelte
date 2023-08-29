<script>
    import {activeConversationIdStore, conversationSelected, activeContactIdStore,contactSelected} from '../stores/mainstore.js';
    import {parse} from 'cookie';
    import ToggleComponent from './ToggleComponent.svelte';
    import {onMount} from 'svelte';
    import Modal from './Modal.svelte';

    let showModal = false;
    import {actualMVC} from "../stores/mainstore.js";

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

    let showControlsMenu = false;

    function backButtonClick() {
        if ($actualMVC === 'conversation') {
            conversationSelected.set(false);
            activeConversationIdStore.set(null);
        } else if ($actualMVC === 'contact') {
            contactSelected.set(false);
            activeContactIdStore.set(null);
        }

        document.querySelector(`.panel-left`).classList.add('active-panel');
        document.querySelector(`.panel-right`).classList.remove('active-panel');
        window.adjustPanels();
    }

    let idConversation;
    let isConversationSelected = false;
    let idContact;
    let isContactSelected = false;

    conversationSelected.subscribe((value) => {
        isConversationSelected = value;
    });
    activeConversationIdStore.subscribe((value) => {
        idConversation = parseInt(value);
    });
    contactSelected.subscribe((value) => {
        isContactSelected = value;
    });
    activeContactIdStore.subscribe((value) => {
        idContact = parseInt(value);
    });
</script>

<div class="user-bar" class:hidden-bar={((!isConversationSelected)&&($actualMVC === 'conversation'))||((!isContactSelected)&&($actualMVC === 'contact'))}>
    <div class="user-bar-container" class:noShadow={($actualMVC==='contact')}>
        <div class="conversation-user">
            <div class="back-button">
                <a class="icon" on:click={backButtonClick}><img src="img/icons/icon_back.svg" alt="search"/></a
                >
            </div>
            {#if (idConversation === 1)&&($actualMVC === 'conversation')}
                <div class="conversation-user__photo" >
                    <img
                            class="photo-circle photo-circle--medium"
                            src="../img/icons/icon_nemp_v4_filled.svg"
                            alt="Yellow development"
                    />
                </div>
                <div class="conversation-user__detail">
                    <div class="conversation-user__detail__name">Yellow - development group</div>
                </div>
            {:else if (idConversation === 2)&&($actualMVC === 'conversation')}
                <div class="conversation-user__photo" >
                    <img
                            class="photo-circle photo-circle--medium"
                            src="../img/icons/icon_nemp_v5.svg"
                            alt="Yellow announcements"
                    />
                </div>
                <div class="conversation-user__detail">
                    <div class="conversation-user__detail__name">Yellow - announcements newsgroup</div>
                </div>
            {:else}
                <div class="conversation-user__photo" on:click={() => (showModal = true)}>
                    <img
                            class="photo-circle photo-circle--medium"
                            src="https://i.pravatar.cc/300?u=user3"
                            alt="user2"
                    />
                </div>
                <div class="conversation-user__detail" on:click={() => (showModal = true)}>
                    <div class="conversation-user__detail__name">
                        Veryveryvery Long Username - Some Other Company Ltd.
                    </div>
                    <div
                            class="conversation-user__detail__address"
                            onclick="copy('extremelyultralongusername@veryveryverylongdomain.com')"
                    >
                        extremelyultralongusername@veryveryveryveryveryveryverylongdomain.com
                    </div>
                </div>
            {/if}
        </div>
        {#if $actualMVC === 'conversation'}
            <div class="conversation-controlls">
                <a class="icon" onclick=""><img src="img/icons/search.svg" alt="search"/></a>
                <a class="icon" onclick=""><img src="img/icons/videocall.svg" alt="videocall"/></a>
                <a class="icon" onclick=""><img src="img/icons/call.svg" alt="call"/></a>
                <a class="icon" onclick=""
                ><img class="non-secure" src="img/icons/transparent/non-secure.svg" alt="secure"/></a
                >
                <div class="icon icon-controls" on:click={() => (showControlsMenu = !showControlsMenu)}>
                    <img src="img/icons/dots.svg" alt="dots"/>
                </div>
                <ToggleComponent
                        bind:isOpen={showControlsMenu}
                        toggleElementSelector=".icon-controls"
                        targetSelector={['.controls-menu']}
                        toggleClass="invisiblef"
                >
                    <div class="controls-menu no-select" class:invisiblef={!showControlsMenu}>
                        <p
                                on:click={() => {
						/* Handle mute notifications */
					}}
                        >
                            Mute notifications
                        </p>
                        <p
                                on:click={() => {
						/* Handle export history */
					}}
                        >
                            Export history
                        </p>
                        <p
                                on:click={() => {
						/* Handle delete conversation */
					}}
                        >
                            Delete conversation
                        </p>
                    </div>
                </ToggleComponent>
            </div>
        {:else if $actualMVC === 'contact'}
            <div class="conversation-controlls">
                <div class="icon icon-controls" on:click={() => (showControlsMenu = !showControlsMenu)}>
                    <img src="img/icons/dots.svg" alt="dots"/>
                </div>
                <ToggleComponent
                        bind:isOpen={showControlsMenu}
                        toggleElementSelector=".icon-controls"
                        targetSelector={['.controls-menu']}
                        toggleClass="invisiblef"
                >
                    <div class="controls-menu no-select profile-menu" class:invisiblef={!showControlsMenu}>
                        <div class="element">
                            <div class="imgdiv"><img src="./img/icons/icon_help_n_d.svg" alt="Icon 1"></div>
                            <div><span>Add contact</span></div>
                        </div>
                        <div class="element">
                            <div class="imgdiv"><img src="./img/icons/icon_help_n_d.svg" alt="Icon 2"></div>
                            <div><span>Follow</span></div>
                        </div>
                        <div class="element">
                            <div class="imgdiv"><img src="./img/icons/icon_message_n_d.svg" alt="Icon 3"></div>
                            <div><span>Send message</span></div>
                        </div>
                        <div class="element">
                            <div class="imgdiv"><img src="./img/icons/icon_donations_n_d.svg" alt="Icon 4"></div>
                            <div><span>Donate</span></div>
                        </div>
                    </div>
                </ToggleComponent>
            </div>
        {/if}
        {#if showModal}
            <Modal title="User info" classes="modal-class-width-250px" on:close={closeModal}>
                <div class="profile-main">

                    <div class="profile-photo-info">
                        <div class="profile-photo-container">
                            <img class="photo-circle photo-circle-large" src="https://i.pravatar.cc/300?u=ownprofile"
                                 alt="Profile Photo">
                        </div>
                        <div class="profile-info">
                            <div class="user-name"><b>Jane Smith</b></div>
                            <div class="user-email">seznam@radsianineznam.cz</div>
                        </div>
                    </div>
                    <div class="profile-menu">
                        <div class="element">
                            <div class="imgdiv"><img src="./img/icons/icon_help_n_d.svg" alt="Icon 1"></div>
                            <div><span>Add contact</span></div>
                        </div>
                        <div class="element">
                            <div class="imgdiv"><img src="./img/icons/icon_help_n_d.svg" alt="Icon 2"></div>
                            <div><span>Follow</span></div>
                        </div>
                        <div class="element">
                            <div class="imgdiv"><img src="./img/icons/icon_help_n_d.svg" alt="Icon 3"></div>
                            <div><span>Send message</span></div>
                        </div>
                        <div class="element">
                            <div class="imgdiv"><img src="./img/icons/icon_help_n_d.svg" alt="Icon 4"></div>
                            <div><span>Send Yellow</span></div>
                        </div>
                    </div>
                </div>
            </Modal>
        {/if}
        <!--<div
            class="message__content__info__icons__icon message__content__info__icons__icon--non-secure"
        />-->
    </div>
</div>
<style>
    .profile-menu {
        min-width:222px;
        max-width: 222px;
        overflow: hidden;
        box-sizing: border-box;
        /*height: 200px;*/
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 8px 2px #1d1d1d3d;
        top:96px;
        z-index: 101;

    }
    .profile-menu .element {
        border-radius: 0px;
        margin: 0px;

        max-height: 32px;

    }
    .profile-menu .element {
        width: auto;
        display: flex; /* Opravený překlep */
        align-items: center; /* Zarovnání položek vertikálně do středu */
        justify-content: flex-start; /* Ikonu vlevo a tlačítko vpravo */
        background-color: var(--primary-color-p35);
        /*border: 1px solid var(--primary-color-p35);*/
        height: 32px;
        margin: 0px 0px 0px 0px;
        flex: 1;
        color: #1d1d1d;
    }
    .profile-menu .element:hover {
        background-color: var(--primary-color-p44);
    }
    .imgdiv {
        width: 32px;
        height: 32px;
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
        margin-left: 6px;
    }
    .profile-main .profile-photo-info {
        width:100%;
        display:flex;
        flex-direction: column;

    }
    .profile-main .profile-photo-info .profile-info {
        text-align: center;
        margin-top:10px;
        margin-bottom:10px;
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

</style>
