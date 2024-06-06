<script>
    import {activeConversationIdStore, conversationSelected, activeContactIdStore, contactSelected, activeCallIdStore, callSelected, activeVideoIdStore, videoSelected} from '../stores/mainstore.js';
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
    import VoiceVideoCall from "./VoiceVideoCall.svelte";

    let showVideoCall = false;

    function backButtonClick() {
        if ($actualMVC === 'conversation') {
            conversationSelected.set(false);
            activeConversationIdStore.set(null);
        } else if ($actualMVC === 'contact') {
            contactSelected.set(false);
            activeContactIdStore.set(null);
        } else if ($actualMVC === 'call') {
            callSelected.set(false);
            activeCallIdStore.set(null);
        } else if ($actualMVC === 'video') {
            videoSelected.set(false);
            activeVideoIdStore.set(null);
        }

        document.querySelector(`.panel-left`).classList.add('active-panel');
        document.querySelector(`.panel-right`).classList.remove('active-panel');
        window.adjustPanels();
    }

    let idConversation;
    let isConversationSelected = false;
    let idContact;
    let isContactSelected = false;
    let idCall;
    let isCallSelected = false;
    let idVideo;
    let isVideoSelected = false;

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
    callSelected.subscribe((value) => {
        isCallSelected = value;
    });
    activeCallIdStore.subscribe((value) => {
        idCall = parseInt(value);
    });
    videoSelected.subscribe((value) => {
        isVideoSelected = value;
    });
    activeVideoIdStore.subscribe((value) => {
        idVideo = parseInt(value);
    });

    let istogglecont = false;

</script>

<div class="user-bar" class:back-bar={$actualMVC==='video' || $actualMVC==='newsfeed'} class:hidden-bar={((!isConversationSelected)&&($actualMVC === 'conversation'))||((!isContactSelected)&&($actualMVC === 'contact'))||((!isCallSelected)&&($actualMVC === 'call'))}>


  {#if $actualMVC === 'video'}
    <div class="user-bar-container" class:noShadow={($actualMVC==='contact')}>
      <div class="conversation-user">
        <div class="back-button">
          <a class="icon" on:click={backButtonClick}><img src="img/icons/icon_back.svg" alt="search"/></a>
        </div>
        <div class="title"><span>Show subscribers</span></div>
      </div>
    </div>
  {:else if $actualMVC === 'newsfeed'}
    <div class="user-bar-container" class:noShadow={($actualMVC==='contact')}>
      <div class="conversation-user">
        <div class="back-button">
          <a class="icon" on:click={backButtonClick}><img src="img/icons/icon_back.svg" alt="search"/></a>
        </div>
        <div class="title"><span>Show followers</span></div>
      </div>
    </div>
  {:else}
    <div class="user-bar-container" class:noShadow={($actualMVC==='contact')}>
      <div class="conversation-user">
        <div class="back-button">
          <a class="icon" on:click={backButtonClick}><img src="img/icons/icon_back.svg" alt="search"/></a>
        </div>
        {#if (idConversation === 1) && ($actualMVC === 'conversation')}
          <div class="conversation-user__photo">
            <img
                    class="photo-circle photo-circle--medium"
                    src="../img/icons_new/icon_nemp_v4_filled.svg"
                    alt="Yellow development"
            />
          </div>

          <div class="conversation-user__detail">
            <div class="conversation-user__detail__name">Yellow - development group</div>
          </div>


          <br/>
          banany!!!!!


          <div class="user-bar">Topic:
            <img src="img/icons/icon_back.svg" alt="search" class="s-LQr8RHfOuNOc">
            <span class="message_topic">General</span>
            <span class="message_topic">Wedding</span>
            <span class="message_topic">Dog</span>
          </div>


        {:else if (idConversation === 2) && ($actualMVC === 'conversation')}
          <div class="conversation-user__photo">
            <img
                    class="photo-circle photo-circle--medium"
                    src="../img/icons_new/icon_nemp_v5.svg"
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
      
      convo
      
      
        <div class="conversation-controlls">
          <a class="icon" onclick=""><img src="img/icons_new/search_noback.svg" alt="search"/></a>
          <a class="icon" on:click={()=>(showVideoCall = true)}><img src="img/icons_new/videocall_noback_black.svg" alt="videocall"/></a>
          <a class="icon" on:click={()=>(showVideoCall = true)}><img src="img/icons_new/call_noback_black.svg" alt="call"/></a>
          <a class="icon" onclick=""><img src="img/icons_new/encryption_off_noback.svg" alt="secure"/></a>
          <div class="icon icon-controls" on:click={() => (showControlsMenu = !showControlsMenu)}>
            <img src="img/icons_new/other_noback.svg" alt="dots"/>
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
            <img src="img/icons_new/other_noback.svg" alt="dots"/>
          </div>
          <ToggleComponent
                  bind:isOpen={showControlsMenu}
                  toggleElementSelector=".icon-controls"
                  targetSelector={['.controls-menu']}
                  toggleClass="invisiblef"
          >
            <div class="controls-menu no-select profile-menu" class:invisiblef={!showControlsMenu}>
              <div class="element">
                <div class="imgdiv"><img src="./img/icons_new/contact_add_noback.svg" alt="Add contact"></div>
                <div><span>Add contact</span></div>
              </div>
              <div class="element">
                <div class="imgdiv"><img src="./img/icons_new/contact_add_noback2.svg" alt="Follow"></div>
                <div><span>Follow</span></div>
              </div>
              <div class="element">
                <div class="imgdiv"><img src="./img/icons_new/send_noback.svg" alt="Send message"></div>
                <div><span>Send message</span></div>
              </div>
              <div class="element">
                <div class="imgdiv"><img src="./img/icons_new/donations_noback.svg" alt="Send Yellow"></div>
                <div><span>Send Yellow</span></div>
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
              <div class="element" on:click={()=>{if (istogglecont) istogglecont = false; else istogglecont = true;}}>
                <div class="imgdiv"><img src="./img/icons_new/icon_add_contact.svg" alt="Toggle contact"></div>
                <div><span>{istogglecont ? 'Delete contact' : 'Add contact'}</span></div>
              </div>
              <div class="element">
                <div class="imgdiv"><img src="./img/icons_new/icon_new_account.svg" alt="Icon 2"></div>
                <div><span>Follow</span></div>
              </div>
              <div class="element">
                <div class="imgdiv"><img src="./img/icons_new/icon_account.svg" alt="Icon 3"></div>
                <div><span>Edit contact</span></div>
              </div>
              <div class="element">
                <div class="imgdiv"><img src="./img/icons_new/icon_forward.svg" alt="Icon 3"></div>
                <div><span>Share contact</span></div>
              </div>
              <div class="element">
                <div class="imgdiv"><img src="./img/icons_new/icon_account.svg" alt="Icon 4"></div>
                <div><span>Block user</span></div>
              </div>
            </div>
          </div>
        </Modal>
      {/if}
      <!--<div
          class="message__content__info__icons__icon message__content__info__icons__icon--non-secure"
      />-->
    </div>
  {/if}
</div>
{#if showVideoCall} }
  <VoiceVideoCall bind:showModal={showVideoCall}/>
{/if}
<style>
    .profile-menu {
        min-width: 222px;
        max-width: 222px;
        overflow: hidden;
        box-sizing: border-box;
        /*height: 200px;*/
        display: flex;
        flex-direction: column;
        /* box-shadow: 0 0 8px 2px #1d1d1d3d; */
        top: 64px;
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
        /*background-color: var(--primary-color-p35); */
        /*border: 1px solid var(--primary-color-p35);*/
        height: 32px;
        padding: 4px 4px;
        flex: 1;
        color: #1d1d1d;
        cursor: pointer;
    }

    .profile-menu span {
        padding-left: 4px;
    }

    .profile-menu .element:hover {
        background-color: var(--primary-color-p35);
    }

    .imgdiv {
        width: 32px;
        height: 32px;
    }

    .imgdiv-follow {
        width: 32px;
        height: 32px;
    }

    .imgdiv-follow img {
        width: 20px;
        height: 20px;
        object-fit: cover;
        margin: 6px 8px;
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
        width: 100%;
        display: flex;
        flex-direction: column;

    }

    .profile-main .profile-photo-info .profile-info {
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .profile-main .profile-photo-info .profile-photo-container {
        padding: 5px 5px 15px 5px;
        width: 210px;

    }

    .profile-main .profile-photo-info .profile-photo-container img {
        box-shadow: var(--basic-shadow);
    }

    .profile-main .profile-photo-info .profile-photo-container img {
        width: 100%;
        height: 100%;
    }

    .conversation-user .title span {
        font-weight: bold;
    }

    @media (min-width: 795px) {
        .back-bar {
            display: none;
        }
    }

</style>
