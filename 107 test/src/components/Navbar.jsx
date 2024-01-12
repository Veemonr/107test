import { useContext } from "react";
import { UserContext } from "../UserContext";

export default function Navbar({changeModal, changeUserTheme}) {
  const user = useContext(UserContext);
  return (
    <nav className="navbar">
      <div className="profile-nav">
        <div className="profile-text profile-background profile-big">
          {user?.toLocaleUpperCase()}
        </div>
      </div>
      <div className="icon-list">
        <div className="navbar-selected" />
        <div className="icon-item ">
          <img src="/chat.svg" alt="chat" />
        </div>
        <div onClick={changeUserTheme} className="icon-item">
          <img src="/person.svg" alt="profile" />
        </div>
        {user === "107" ? (
          <div onClick={changeModal} className="icon-item">
            <div className="image-openai" alt="setting" />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="empty-nav" />
      <div className="icon-setting">
            <img  src="/setting.svg" alt="setting" />
      </div>
    </nav>
  );
}
