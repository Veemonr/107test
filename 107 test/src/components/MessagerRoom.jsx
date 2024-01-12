import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import TranslateRoom from "./TranslateRoom";
import MessageBubble from "./MessageBubble";
import useSWR from 'swr'

const fetcher = url => fetch(url).then(url => url.json())
const url = "http://localhost:3000/conversations"

export default function MessagerRoom() {
  const user = useContext(UserContext);
  const [sendMessage, setSendMessage] = useState("")
  const { data, error, isLoading } = useSWR(url, fetcher,  { refreshInterval: 1000 })
  console.log(data)
  function changeSend(event) {
    const dataEvent = event.target.value
    setSendMessage(dataEvent)
  }
  async function postMessage(event) {
    try {
      event?.preventDefault()
      const translated_message = user === "107" ? "English Message Translate To Japanase" : "Japanase Message Translate To english" 
      const dataPost = {
        speaker: user,
        original_message: sendMessage,
        translated_message
      }
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataPost)
      })
      setSendMessage("")
    } catch(err) {
      console.log(err)
    }

  }
  const [chatList, setChatList] = useState([]);
  console.log(chatList)
  const listSender = chatList.map((chat) => chat?.speaker);
  useEffect(() => {
    if(data) setChatList(data)
    else setChatList([])
  }, [data])
  return (
    <>
      <div className="room-body">
        <div className="room-title">
          <div className="room-profile">
            <div className="profile-text profile-background profile-small">
              {user === "107" ? "ATO" : "107"}
            </div>
          </div>
          <div className="room-detail">
            <p className="room-name">{user === "107" ? "ATO" : "107"}</p>
            <p className="room-status">Online</p>
          </div>
        </div>
        <div className="room-chat">
          {chatList.map((chat) => (
            <MessageBubble key={chat.id} chat={chat} listSender={listSender} />
          ))}
        </div>
        <div className="room-sending">
          {user === "107" ? <TranslateRoom /> : ""}
          <div className="room-sendbox">
            <div className="sendbox-line" />
            <img className="attached-logo" src="/attached.svg" alt="attached" />
            <textarea onChange={(event) => changeSend(event)} className="input-send" type="text" value={sendMessage} />
            <div onClick={postMessage} className="send-button">
              <img src="/send.svg" alt="send" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
