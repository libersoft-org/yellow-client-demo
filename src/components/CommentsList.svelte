<div class="comments">
    <div class="comments-info">
        <span>241 comments</span>
    </div>
    <div class="comment-input">
       <!-- <div class="c-photo">
            <img class="photo-circle photo-circle--small" src="https://i.pravatar.cc/300?u=user5" alt="https://i.pravatar.cc/300?u=user5"/>
        </div> -->
        <div class="c-icon">
            <img src="./img/icons/icon_comment.svg" alt="Comment Icon"/>
        </div>
        <div class="c-input" contenteditable="true">
        </div>
        <div class="c-send">
            <img src="./img/icons/icon_caret_right.svg" alt="Send Icon"/>
        </div>
    </div>
    <div class="comment">
        <div class="comment-info">
            <div class="c-photo">
                <img class="photo-circle photo-circle--small" src="https://i.pravatar.cc/300?u=user5" alt="https://i.pravatar.cc/300?u=user5"/>
            </div>

        </div>
        <div class="comment-text message__content">
            <div class="c-info">
                <b>Matador</b> 1 month ago
            </div>
            <div class="c-text">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                </span>
            </div>
            <div class="like-dislike">
                <div class="element-l">
                    <div class="imgdiv-like"><img src="./img/icons/icon_like_b.svg" alt="Like Icon"></div>
                    <div><span>15</span></div>
                </div>
                <div class="element-p">
                    <div class="imgdiv-dislike"><img src="./img/icons/icon_dislike_b.svg" alt="Dislike Icon"></div>
                    <div><span>2</span></div>
                </div>

            <div class="cc-icon">
                <img src="./img/icons/icon_comment.svg" alt="Comment Icon"/>
            </div>
            <div class="cc-input" contenteditable="true">
            </div>
            <div class="cc-send">
                <img src="./img/icons/icon_caret_right.svg" alt="Send Icon"/>
            </div>
            </div>
        </div>
    </div>
    <div class="comment">
        <div class="comment-info">
            <div class="c-photo">
                <img class="photo-circle photo-circle--small" src="https://i.pravatar.cc/300?u=user7" alt="https://i.pravatar.cc/300?u=user7"/>
            </div>
        </div>
        <div class="comment-text message__content">
            <div class="c-info">
                <b>Matador</b> 1 month ago
            </div>
            <div class="c-text">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
            </div>
            <div class="like-dislike">
                <div class="element-l">
                    <div class="imgdiv-like"><img src="./img/icons/icon_like_b.svg" alt="Like Icon"></div>
                    <div><span>15</span></div>
                </div>
                <div class="element-p">
                    <div class="imgdiv-dislike"><img src="./img/icons/icon_dislike_b.svg" alt="Dislike Icon"></div>
                    <div><span>2</span></div>
                </div>

                <div class="cc-icon">
                    <img src="./img/icons/icon_comment.svg" alt="Comment Icon"/>
                </div>
                <div class="cc-input" contenteditable="true">
                </div>
                <div class="cc-send">
                    <img src="./img/icons/icon_caret_right.svg" alt="Send Icon"/>
                </div>
            </div>
        </div>
    </div>
    <div class="comment">
        <div class="comment-info">
            <div class="c-photo">
                <img class="photo-circle photo-circle--small" src="https://i.pravatar.cc/300?u=ownprofile" alt="https://i.pravatar.cc/300?u=ownprofile"/>
            </div>
        </div>
        <div class="comment-text message__content">
            <div class="c-info">
                <b>Matador</b> 1 month ago
            </div>
            <div class="c-text">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
            </div>
            <div class="like-dislike">
                <div class="element-l">
                    <div class="imgdiv-like"><img src="./img/icons/icon_like_b.svg" alt="Like Icon"></div>
                    <div><span>15</span></div>
                </div>
                <div class="element-p">
                    <div class="imgdiv-dislike"><img src="./img/icons/icon_dislike_b.svg" alt="Dislike Icon"></div>
                    <div><span>2</span></div>
                </div>

                <div class="cc-icon">
                    <img src="./img/icons/icon_comment.svg" alt="Comment Icon"/>
                </div>
                <div class="cc-input" contenteditable="true">
                </div>
                <div class="cc-send">
                    <img src="./img/icons/icon_caret_right.svg" alt="Send Icon"/>
                </div>
            </div>
        </div>
    </div>
    <div class="comment-showall">show all comments</div>
</div>

<style>
    .comments-info  {
        margin: 8px 0;
        text-align: left;
    }
    .comments {
        display: flex;
        flex-direction: column;
    }
    .comment {
        margin-bottom: 32px;
        flex-direction: row;
        display:flex;
    }
    .comment-input {
        display: flex;
        align-items: center;
        margin-bottom: 32px;
        padding: 4px;
        border-radius: 10px;
        border: 1px solid var(--primary-color-p35);
        background-color: var(--primary-color-p35);
        box-shadow: var(--basic-shadow);
        margin-top: 8px;
    }
    .c-input, .cc-input {
        border-bottom: 1px solid black;
        padding:4px;
        flex:1;
        margin-right: 4px;

    }
    .c-send, .c-icon {
        width:20px;
        height:20px;
        margin-right: 8px;
    }
    .cc-send, .cc-icon {
        width:16px;
        height:16px;
    }
    .cc-icon {
        margin-left:24px;
        margin-right: 8px;
    }
    .c-send, .cc-send {
        cursor: pointer;
    }
    .c-send img, .c-icon img {
        width:100%;
        height: 100%;
    }
    .comment-info {
        display: flex;
        align-items: flex-end;
        margin: 0px 0;
    }
    .c-photo {
        margin-right: 8px;
        width:40px;
        height:40px;
    }
    .c-photo img {
        box-shadow: var(--basic-shadow);
        width:100%;
        height:100%;
    }
    .like-dislike {
        margin-top:8px;
        align-items: center;
        width:100%;
    }
    .like-dislike, .element-l, .element-p {
        display: flex;
        padding:4px;
        height:28px;
        align-items: center;

    }
    .element-l {
        margin-right: 8px;
    }
    .element-l, .element-p {
        cursor: pointer;
    }
    .imgdiv-like, .imgdiv-dislike  {
        width: 20px;
        height:20px;
        margin-right: 4px;
    }
    .element-l:hover, .element-p:hover  {
        border-radius:4px;
        background-color: var(--primary-color-p25);

    }
    .imgdiv-like {
        margin-top: -2px;
    }
    .imgdiv-dislike {
        margin-top: 0px;
    }
    .imgdiv-like img, .imgdiv-dislike img {
        width:100%;
        height:100%;
    }
    .comment-showall {
        width:100%;
        text-align: center;
        font-weight: bold;
        cursor: pointer;
        margin:16px 0;

    }
    .c-info {
        margin-bottom: 8px;
        text-decoration: underline;
    }
    .message__content {
        max-width: 100%;
        background-color: var(--primary-color-p35);
        margin: 0 0 0 22px;
    }
    .message__content:after {
        content: '';
        position: absolute;
        bottom: 6px;
        left: -13px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 13px 16px 13px 0;
        /* border-color: transparent hsl(var(--primary-color-hue), var(--primary-color-sat), calc(var(--primary-color-lig) + 35%)) transparent transparent; */
        border-color: transparent var(--primary-color-p35) transparent transparent;
        filter: drop-shadow(-6px 0px 4px #1d1d1d3d);
        z-index: 1;
    }
</style>