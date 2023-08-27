<script>
    import { dndzone } from 'svelte-dnd-action';

    let items = [
        { id: 0, title: "Conversations", icon: "icon_nemp_v4.svg", hasDot: true },
        { id: 1, title: "Newsfeed", icon: "icon_newsfeed.svg", hasDot: true },
        { id: 2, title: "Video", icon: "icn_playn.svg", hasDot: true },
        { id: 3, title: "Video meeting", icon: "icon_video_meeting.svg", hasDot: true },
        { id: 4, title: "Forum", icon: "icon_help.svg", hasDot: false },
        { id: 5, title: "Events", icon: "icon_event.svg", hasDot: false },
        { id: 6, title: "Blogs", icon: "icon_help.svg", hasDot: false },
        { id: 7, title: "File sharing", icon: "icon_file_sharing.svg", hasDot: false },
        { id: 8, title: "E-shops", icon: "icon_help.svg", hasDot: false },
        { id: 9, title: "Marketplace (with auctions)", icon: "icon_help.svg", hasDot: false },
        { id: 10, title: "Maps", icon: "icon_map_pin.svg", hasDot: false },
        { id: 11, title: "Calendar", icon: "icon_calendar.svg", hasDot: false },
        { id: 12, title: "Tasks", icon: "icon_task.svg", hasDot: false },
        { id: 13, title: "Donations", icon: "icon_donations.svg", hasDot: false },
        { id: 14, title: "Crowdfunding", icon: "icon_help.svg", hasDot: false },
        { id: 15, title: "Cloud storage", icon: "icon_file.svg", hasDot: true },
        { id: 16, title: "Payments", icon: "icon_help.svg", hasDot: false },
        { id: 17, title: "Media feed", icon: "icon_help.svg", hasDot: false },
        { id: 18, title: "Games", icon: "icon_help.svg", hasDot: false },
        { id: 19, title: "Dating", icon: "icon_help.svg", hasDot: false }
    ].map(item => ({ ...item, type: 'icon' }));

    let isExpanded = false;

    function toggleExpanded() {
        isExpanded = !isExpanded;
    }
    import {flip} from "svelte/animate";
    const flipDurationMs = 300;
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
            <div class="social-icon-container" animate:flip="{{duration: 200}}" title={item.title}>
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
