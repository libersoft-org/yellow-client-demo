export default function Menu() {
  return (
    <div id="menu" className="menu slide-in">
      <div className="menu__items">
        <div className="menu__item"><img className="menu__item__icon" src="img/icons/new_conversation.svg" alt="New conversation" />New conversation</div>
        <div className="menu__item"><img className="menu__item__icon" src="img/icons/new_chat.svg" alt="New chat group" />New chat group</div>
        <div className="menu__item"><img className="menu__item__icon" src="img/icons/newsfeed.svg" alt="New news group" />New news group</div>
        <div className="menu__item"><img className="menu__item__icon" src="img/icons/contacts.svg" alt="My contacts" />My contacts</div>
        <div className="menu__item"><img className="menu__item__icon" src="img/icons/calls.svg" alt="Settings" />My calls</div>
        <div className="menu__item"><img className="menu__item__icon" src="img/icons/saved_messages.svg" alt="Saved messages" />Saved messages</div>
        <div className="menu__item"><img className="menu__item__icon" src="img/icons/settings.svg" alt="Settings" />Settings</div>
      </div>
      <div className="menu__app-info">
        <div className="name">NEMP Web Client</div>
        <div className="version">Version: 0.0.1</div>
        <div className="website">
          <a target="_blank" href="https://nemp.io" rel="noreferrer">https://nemp.io</a>
        </div>
        <br />
      </div>
    </div>
  );
}