import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import RoomTitle from "./RoomTitle";

export default function MessageList() {
  const language = useContext(UserContext);
  const initialSearch = language === "107" ? "Search" : "検索";
  const [search, setSearch] = useState(initialSearch);
  const [roomList, setRoomData] = useState([
    {
      id: 1,
      speaker: "Ato",
      original_message: "日本語のメッセージ",
      translated_message: "Japanese message",
    },
    {
      id: 2,
      speaker: "107",
      original_message: "English message",
      translated_message: "英語のメッセージ",
    },
  ]);

  function emptySearch() {
    if (search === "Search" || search === "検索") setSearch("");
  }

  function updateSearch(event) {
    const dataChange = event.target.value;
    setSearch(dataChange);
  }
  return (
    <>
      <div className="message-list">
        <div className="message-bar">
          <p className="message-title">
            {language === "107" ? "Messages" : "メッセージ"}
          </p>
          <img className="add-room" src="/add.svg" alt="add" />
        </div>
        <div className="message-room">
          <div className="search-room search-background" />
          <div className="search-room search-title">
            <img className="search-logo" src="/search.svg" alt="search" />
            <input
              onClick={emptySearch}
              onChange={(event) => updateSearch(event)}
              className="search-bar"
              type="text"
              value={search}
            />
          </div>
          <div className="room-list">
            {roomList.map(room => <RoomTitle key={room.id} room={room} id={room.id} />)}
          </div>
        </div>
      </div>
    </>
  );
}
