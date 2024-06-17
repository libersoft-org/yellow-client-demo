<script>
    import {dndzone} from 'svelte-dnd-action';
    import {actualMVC, activeVideView} from "../stores/mainstore.js";
    import VideoMeeting from "./VideoMeeting.svelte";

    let showVideoMeet = false;
    let items = [
        {
            id: 0, title: "Conversations", icon: "conversations.svg", hasDot: true, onclick: (e) => {
                e.preventDefault();
                $actualMVC = 'conversation';
                //document.querySelector('#menu-toggle').click()
            }
        },
        {
            id: '0b', title: "My Calls", icon: "icon_calls.svg", hasDot: true, onclick: (e) => {
                e.preventDefault();
                $actualMVC = 'call';
                document.querySelector('#menu-toggle').click()
            }
        },
        {
            id: '0c', title: "My Contacts", icon: "icon_contacts.svg", hasDot: true, onclick: (e) => {
                e.preventDefault();
                $actualMVC = 'contact';
                document.querySelector('#menu-toggle').click()
            }
        },
        {
            id: 1, title: "Newsfeed", icon: "icon_newsfeed_stroke.svg", hasDot: true, onclick: (e) => {
                e.preventDefault();
                $actualMVC = 'newsfeed';
                //document.querySelector('#menu-toggle').click();
                document.querySelector(`.panel-left`).classList.remove('active-panel');
                document.querySelector(`.panel-right`).classList.add('active-panel');
                window.adjustPanels();
            }
        },
        {
            id: 2, title: "Video", icon: "video_noback.svg", hasDot: true, onclick: (e) => {
                e.preventDefault();
                $actualMVC = 'video';
                $activeVideView = 'videolist';
                //document.querySelector('#menu-toggle').click();
                document.querySelector(`.panel-left`).classList.remove('active-panel');
                document.querySelector(`.panel-right`).classList.add('active-panel');
                window.adjustPanels();
            }
        },
        {
            id: 3, title: "Video meeting", icon: "videoconference_noback.svg", hasDot: true, onclick: () => {
                showVideoMeet = true;
            }
        },
        {id: '16', title: "Wallet", icon: "payments_noback.svg", hasDot: false,
          onclick: (e) => {
                  e.preventDefault();
                  $actualMVC = 'wallet';
                  document.querySelector('#menu-toggle').click();
                  document.querySelector(`.panel-left`).classList.remove('active-panel');
                  document.querySelector(`.panel-right`).classList.add('active-panel');
                  window.adjustPanels();
              }
        },
        {id: 4, title: "Forum", icon: "forum_noback.svg", hasDot: false},
        {id: 5, title: "Events", icon: "event_noback.svg", hasDot: false},
        {id: 6, title: "Blogs", icon: "blogs_noback.svg", hasDot: false},
        {id: 7, title: "File sharing", icon: "file_sharing_noback.svg", hasDot: false},
        {id: 8, title: "E-shops", icon: "eshop_noback.svg", hasDot: false},
        {id: 9, title: "Marketplace (with auctions)", icon: "marketplace_noback.svg", hasDot: false},
        {id: 10, title: "Maps", icon: "map_noback.svg", hasDot: false},
        {id: 11, title: "Calendar", icon: "calendar_noback.svg", hasDot: false},
        {id: 12, title: "Tasks", icon: "tasks_noback.svg", hasDot: false},
        {id: 13, title: "Donations", icon: "donations_noback.svg", hasDot: false},
        {id: 14, title: "Crowdfunding", icon: "crowdfunding_noback.svg", hasDot: false},
        {id: 15, title: "Cloud storage", icon: "cloud_noback.svg", hasDot: true},
        {id: 17, title: "Media feed", icon: "media_noback.svg", hasDot: false},
        {id: 18, title: "Games", icon: "games_noback.svg", hasDot: false},
        {id: 19, title: "Dating", icon: "dating_noback.svg", hasDot: false}
    ];

    let isExpanded = false;

    function toggleExpanded() {
        isExpanded = !isExpanded;
    }

    function handleDndConsider(e) {
        e.preventDefault();
        items = e.detail.items;
    }

    function handleDndFinalize(e) {
        e.preventDefault();
        items = e.detail.items;
    }
</script>

<style>
    .dot {
        position: relative;
        top: 0;
        right: 50%;
        width: 24px;
        height: 24px;
        z-index: 11;
    }
    svg .primary-color-svg {
        fill: #FCD213;
    }
</style>

<div class="social-icons" class:expanded={isExpanded}>
    {#if dndzone }
        <div class="social-icons-block" on:click={()=>{console.log('www');}} use:dndzone={{ items }} on:consider={handleDndConsider} on:finalize={handleDndFinalize} >

            {#each items as item (item.id)}
                <div class="social-icon-container" title={item.title} on:click={item.onclick}>
                    <img src={`img/icons_new/${item.icon}`} alt={item.title} class="icon"/>
                    {#if item.hasDot}
                        <div class="dot">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="6" r="6" fill="red"/>
                            </svg>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    {/if}
    <div class="social-arrow" class:expanded={isExpanded} on:click={toggleExpanded}></div>
</div>
{#if showVideoMeet} }
    <VideoMeeting bind:showModal={showVideoMeet}/>
{/if}
