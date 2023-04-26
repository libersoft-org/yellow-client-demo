import React from 'react';
import './App.scss';
import Menu from './components/Menu';
import SearchBar from './components/SearchBar';
import AccountsBar from './components/AccountsBar/AccountsBar';
import ConversationPanel from './components/ConversationPanel/ConversationPanel';

function App() {
  return (
    <div id="screen">
      <div className="panel panel-left">
        <Menu />
        <SearchBar />
        <div className="resizer" tabIndex={0}></div>
        <AccountsBar />
        <ConversationPanel />
      </div>
      <div className="panel panel-right">
    <div className="user-bar">
      <div className="conversation-user">
        <div className="conversation-user__photo">
          <img className="photo-circle photo-circle--medium" src="https://i.pravatar.cc/300?u=user2" alt="user2"/>
        </div>
        <div className="conversation-user__detail">
          <div className="conversation-user__detail__name">Veryveryvery Long Username - Some Other Company Ltd.</div>
          <div className="conversation-user__detail__address">
            extremelyultralongusername@veryveryveryveryveryveryverylongdomain.com
          </div>
        </div>
      </div>
     <div className="conversation-controlls">
        <a className="icon"><img src="img/icons/search.svg" alt="search"/></a>
        <a className="icon"><img src="img/icons/videocall.svg" alt="videocall"/></a>
        <a className="icon"><img src="img/icons/call.svg" alt="call"/></a>
        <a className="icon"><img src="img/icons/secure_yes.svg" alt="secure"/></a>
        <a className="icon"><img src="img/icons/dots.svg" alt="dots"/></a>
     </div>
    </div>
    <div className="conversation-detail">
      <div className="messages-box">
        <div className="messages">
          <div className="messages__info">
            <div className="messages__info__date">17 March 2023</div>
          </div>
          <div className="message message--sent">
            <div className="message__sender-photo">
              <img className="photo-circle photo-circle--medium" src="https://i.pravatar.cc/300?u=ownprofile" alt="Test" />
            </div>
            <div className="message__content">
              <div className="message__content__text">
                I am also sending you very very extremely long long longvery very extremely long long longvery very extremely long long longvery very extremely long long longvery very extremely long long long message.
              </div>
              <div className="message__content__info">
                <div className="message__content__info__date-time">16:25:15</div>
                <div className="message__content__info__icons">
                  <div className="message__content__info__icons__icon message__content__info__icons__icon--secure"></div>
                  <div className="message__content__info__icons__icon message__content__info__icons__icon--read"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="input-bar">
     <img className="icon" src="img/icons/attachment.svg" alt="Attachment" />
     <input id="#message-text-input" className="text" type="text" placeholder="Type a message ..." />
     <img className="icon" src="img/icons/video_message.svg" alt="Voice message" />
     <img className="icon" src="img/icons/voice_message.svg" alt="Voice message" />
     <img className="icon" src="img/icons/emoji.svg" alt="Emoji" />
     <img className="icon" src="img/icons/send.svg" alt="Send" />
    </div>
   </div>
  </div>
  );
}

export default App;
