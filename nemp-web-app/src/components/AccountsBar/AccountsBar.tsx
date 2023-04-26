export default function AccountsBar() {
  return (
    <div className="accounts-bar">
      <div id="active-account" className="accounts-bar__active-account">
        <div className="account account--active">
          <div className="account__photo">
            <img className="photo-circle photo-circle--small" src="https://i.pravatar.cc/300?u=ownprofile" alt="main profile" />
          </div>
          <div className="account__name">
            verylongname@verylongdomain.com
          </div>
          <div className="account__arrow"></div>
        </div>
      </div>
      <div className="accounts-bar__other-accounts">
        <div className="accounts">
          <div className="account">
            <div className="account__photo">
              <img className="photo-circle photo-circle--small" src="https://i.pravatar.cc/300?u=user7" alt="other profile" />
            </div>
            <div className="account__name">
              janedoe@verylongdomain.com
            </div>
          </div>
        </div>
        <div className="blurer"></div>
      </div>
    </div>
  );
}