export default function ConversationPanel() {
  return (
    <div className="conversations-panel">
      <div className="conversation conversation--active">
        <div className="conversation__user-photo">
          <img className="photo-circle photo-circle--medium" src="https://i.pravatar.cc/300?u=user1" alt="https://i.pravatar.cc/300?u=user1" />
        </div>
        <div className="conversation__info">
          <div className="conversation__info__user-name">
            Ultraultraultra Long Username - Company Ltd.
          </div>
          <div className="conversation__info__last-message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.
          </div>
        </div>
        <div className="conversation__status">
          <div className="conversation__status__date-time">12:59:59</div>
          <div className="conversation__status__icons">
            <div className="conversation__status__icons__unread-messages">10</div>
            <div className="conversation__status__icons__read-state conversation__status__icons__read-state--unread"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
