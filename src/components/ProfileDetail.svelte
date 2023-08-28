<script>
    export let contactId;
</script>
<div class="profile-detail">
    <!-- První div -->
    <div style="display: flex; width: 100%;">
        <div class="profile-photo-container">
            <img class="photo-circle photo-circle-large" src="https://i.pravatar.cc/300?u=ownprofile" alt="Profile Photo">
        </div>
        <div class="profile-menu" >
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
    </div>
    <!-- Druhý div -->
    <div class="second-container" style="width: 100%;">
        <div class="second-container-semi" style="display: flex; justify-content: space-between;">
            <div class="element">
                <div class="imgdiv"><img src="./img/icons/icon_newsfeed_d.svg" alt="Newsfeed Icon"></div>
                <div><span>Newsfeed</span></div>
            </div>
            <div class="element">
                <div class="imgdiv"><img src="./img/icons/icon_play_out_d.svg" alt="Video Icon"></div>
                <div><span>Video</span></div>
            </div>
            <div class="element">
                <div class="imgdiv"><img src="./img/icons/icon_help_n_d.svg" alt="Forum Icon"></div>
                <div><span>Forum</span></div>
            </div>
            <div class="element">
                <div class="imgdiv"><img src="./img/icons/icon_event_n_d.svg" alt="Events Icon"></div>
                <div><span>Events</span></div>
            </div>
            <div class="element">
                <div class="imgdiv"><img src="./img/icons/icon_help_n_d.svg" alt="Blog Icon"></div>
                <div><span>Blog</span></div>
            </div>
            <div class="element">
                <div class="imgdiv"><img src="./img/icons/icon_help_n_d.svg" alt="Marketplace Icon"></div>
                <div><span>Marketplace</span></div>
            </div>
        </div>
        <div class="selected-content">
            TODO details from profile tabs
        </div>
    </div>
</div>
<style>
    .profile-detail {
        margin: 32px 0px 64px 0px;
        width: 100%;
        overflow-x: hidden;
    }
    .profile-detail > div:first-child {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 32px 32px 32px;

    }
    .profile-detail > div:last-child > div:first-child {
        display: flex;
        justify-content: space-between;
    }
    .second-container-semi {
        display: flex;
        flex-wrap: wrap; /* Povolí zalomení položek flexboxu */
        justify-content: space-between;
        container-type: inline-size;
    }
    .second-container-semi .element {
        /* min-width: 125px; */
        width: calc(16.66% - 1px)!important;
        flex-grow: 1;
        flex-basis: calc(16.66% - 5px);
        max-width: calc(16.66% - 1px);
    }

    @container (max-width: 750px) {
        .element {
            min-width: calc(33.33% - 2px);
            flex-basis: calc(33.33% - 2px);
            max-width: calc(33.33% - 1px);
        }
    }

    .profile-photo-container {
        padding: 0px 32px 0px 0px;
        width: 200px;
    }
    .profile-menu {
        flex-grow: 1;
        max-width: 200px;
        overflow: hidden;
        box-sizing: border-box;
        height:200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .profile-menu .element {
        border-radius: 5px;
        margin: 0;
        max-height:32px;
    }
    .profile-photo-container img{
        width:200px;
        height:200px;
    }
    .element {
        width: auto;
        display: flex;  /* Opravený překlep */
        align-items: center;  /* Zarovnání položek vertikálně do středu */
        justify-content: flex-start;  /* Ikonu vlevo a tlačítko vpravo */
        background-color: var(--primary-color-p15);
        border: 1px solid var(--primary-color-15);
        height:32px;
        margin: 0px 0px 0px 0px;
        flex: 1;
        color: #1d1d1d;
    }
    .element div {
    }
    .element img {
    }
    .imgdiv {
        width:32px;
        height:32px;
    }
    .selected-content {
        margin-top: 25px;
        text-align: center;
    }
</style>