import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import TranslateRoom from "./TranslateRoom";
import MessageBubble from "./MessageBubble";

export default function MessagerRoom() {
  const user = useContext(UserContext);
  const initialChat = [
    {
      id: 1,
      speaker: "Ato",
      original_message: "日本語のメッセージaaaaaaaaaaaaaaaaaaaaaaa",
      translated_message: "Japanese message",
    },
    {
      id: 2,
      speaker: "Ato",
      original_message: "日本語のメッセージ",
      translated_message: "Japanese message",
    },
    {
      id: 3,
      speaker: "Ato",
      original_message: "日本語のメッセージ",
      translated_message: "Japanese message",
    },
    {
      id: 4,
      speaker: "107",
      original_message: "English message asksajhasjhsjh ashskajhasjhsa sahkjashkasjh ashksakdhsgdjahgshg asbkhaskjadkdsksahskj",
      translated_message: "英語のメッセージ",
    },
  ];
  const chatList = useState(initialChat);
  const listSender = initialChat.map((chat) => chat.speaker);
  return (
    <>
      <div className="room-body">
        <div className="room-title">
          <div className="room-profile">
            <div className="profile-text profile-background profile-small">
              {user?.toLocaleUpperCase()}
            </div>
          </div>
          <div className="room-detail">
            <p className="room-name">{user}</p>
            <p className="room-status">Online</p>
          </div>
        </div>
        <div className="room-chat">
          {initialChat.map((chat) => (
            <MessageBubble key={chat.id} chat={chat} listSender={listSender} />
          ))}
        </div>
        <div className="room-sending">
          {user === "107" ? <TranslateRoom /> : ""}
          <div className="room-sendbox">
            <div className="sendbox-line" />
            <img className="attached-logo" src="/attached.svg" alt="attached" />
            <textarea className="input-send" type="text" />
            <div className="send-button">
              <img src="/send.svg" alt="send" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
