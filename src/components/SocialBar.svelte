<script>
    import { dndzone } from 'svelte-dnd-action';
    import {actualMVC} from "../stores/mainstore.js";
    import VoiceVideoCall from "./VoiceVideoCall.svelte";
    import VideoMeeting from "./VideoMeeting.svelte";
    let showVideoCall = false;
    let showVideoMeet = false;
    let items = [
        { id: 0, title: "Conversations", icon: "icon_nemp_v4.svg", hasDot: true, onclick: ()=>{$actualMVC = 'conversation';document.querySelector('#menu-toggle').click()}},
        { id: 1, title: "Newsfeed", icon: "icon_newsfeed.svg", hasDot: true },
        { id: 2, title: "Video", icon: "icon_play_out.svg", hasDot: true , onclick: ()=>{showVideoCall = true;}},
        { id: 3, title: "Video meeting", icon: "icon_video_meeting.svg", hasDot: true, onclick: ()=>{showVideoMeet = true;} },
        { id: 4, title: "Forum", icon: "icon_help_n.svg", hasDot: false },
        { id: 5, title: "Events", icon: "icon_event_n.svg", hasDot: false },
        { id: 6, title: "Blogs", icon: "icon_help_n.svg", hasDot: false },
        { id: 7, title: "File sharing", icon: "icon_file_sharing_n.svg", hasDot: false },
        { id: 8, title: "E-shops", icon: "icon_help_n.svg", hasDot: false },
        { id: 9, title: "Marketplace (with auctions)", icon: "icon_help_n.svg", hasDot: false },
        { id: 10, title: "Maps", icon: "icon_map_pin_n.svg", hasDot: false },
        { id: 11, title: "Calendar", icon: "icon_calendar_n.svg", hasDot: false },
        { id: 12, title: "Tasks", icon: "icon_task_n.svg", hasDot: false },
        { id: 13, title: "Donations", icon: "icon_donations_n.svg", hasDot: false },
        { id: 14, title: "Crowdfunding", icon: "icon_help_n.svg", hasDot: false },
        { id: 15, title: "Cloud storage", icon: "icon_file_n.svg", hasDot: true },
        { id: 16, title: "Payments", icon: "icon_help_n.svg", hasDot: false },
        { id: 17, title: "Media feed", icon: "icon_help_n.svg", hasDot: false },
        { id: 18, title: "Games", icon: "icon_help_n.svg", hasDot: false },
        { id: 19, title: "Dating", icon: "icon_help_n.svg", hasDot: false }
    ];

    let isExpanded = false;

    function toggleExpanded() {
        isExpanded = !isExpanded;
    }
    function handleDndConsider(e) {
        items = e.detail.items;
    }
    function handleDndFinalize(e) {
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

</style>

<div class="social-icons" class:expanded={isExpanded}>
    <div class="social-icons-block" use:dndzone={{ items }} on:consider="{handleDndConsider}" on:finalize="{handleDndFinalize}">
        {#each items as item (item.id)}
            <div class="social-icon-container" title={item.title} on:click={item.onclick}>
                <img src={`img/icons/${item.icon}`} alt={item.title} class="icon"/>
                {#if item.hasDot}
                    <div class="dot">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="6" fill="red"/>
                        </svg>
                    </div>
                {/if}
            </div>
        {/each}
    </div>
    <div class="social-arrow" class:expanded={isExpanded} on:click={toggleExpanded}></div>
</div>
{#if showVideoCall} }
<VoiceVideoCall bind:showModal={showVideoCall}/>
{/if}
{#if showVideoMeet} }
    <VideoMeeting bind:showModal={showVideoMeet}/>
{/if}