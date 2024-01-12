import { useContext, useState } from "react";
import { UserContext } from "../UserContext";

export default function MessageBubble({ chat, listSender }) {
  const user = useContext(UserContext);
  let chatMessage = ""
  let [translateBool, setTranslateBool] = useState(false)
  if(user === "107") {
    if(user.speaker !== "107" && translateBool) chatMessage = chat.translated_message
    else chatMessage = chat.original_message
  } else {
    if(user.speaker !== "107") chatMessage = chat.translated_message
    else chatMessage = chat.original_message
  }

  function changeTranslate() {
    setTranslateBool(!translateBool)
  }
  return (
    <>
      <div className="bubble-body">
        { chat.speaker === user ? <div className="empty-blue" /> : ""}
        {chat.speaker !== listSender[chat.id] && chat.speaker !== user ? (
          <div className="profile-text profile-background profile-small">
            {chat.speaker.toUpperCase()}
          </div>
        ) : (
          <div className="empty-profile" />
        )}
        <div className="bubble">
          <div
            className={user !== chat.speaker ? "bubble-grey" : "bubble-blue"}
          >
            <p className="bubble-sender">
              {chat.speaker !== listSender[chat.id - 2] ? chat.speaker : ""}
            </p>
            <p className="bubble-message">{chatMessage}</p>
            { chat.speaker === "107" && user === "107" ? 
            <div className="blue-translate"> 
              {chat.translated_message}
            </div>
            : ""}
          </div>
          {user === "107" && chat.speaker !== "107" ? (
            <div className="bubble-desc">
              <div onClick={changeTranslate} className="bubble-translate">
                <img src="/openai.svg" alt="openai" width={20} height={20} />
                <p>Show {translateBool ? "Translate" : "Original"}</p>
              </div>
              <p className="bubble-time">5:00 AM</p>
            </div>
          ) : (
            <div className="bubble-desc left-time">
              <p className="bubble-time">5:00 AM</p>
            </div>
          )}
        </div>
        {chat.speaker !== listSender[chat.id] && chat.speaker === user ? (
          <div className="profile-text profile-background profile-small blue-sender">
            {chat.speaker.toUpperCase()}
          </div>
        ) : (
          <div className="profile-small blue-sender" />
        )}
        
      </div>
    </>
  );
}
