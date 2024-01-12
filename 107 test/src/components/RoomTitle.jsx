import { useContext } from "react";
import { UserContext } from "../UserContext";

export default function RoomTitle({room, id}) {
    const language = useContext(UserContext);
    const currentId = 1
    let message = ""
    if(room.speaker === "107" && language === "107") message = "You: " + room.original_message
    if(room.speaker === "Ato" && language === "107") message = room.translated_message
    if(room.speaker === "Ato" && language === "Ato") message = "You: " + room.original_message
    if(room.speaker === "107" && language === "Ato") message = room.translated_message
    return (
        <>
        <div className={currentId === id ? "chatroom-selected chatroom-card" : "chatroom-card" }>
            <div className="profile-text profile-background profile-medium">{room?.speaker.toUpperCase()}</div>
            <div className="chatroom-description">
                <div className="chatroom-detail">
                    <p className="chatroom-title">{room.speaker}</p>
                    <p className="chatroom-message">{message}</p>
                </div>
            </div>
                <div className="chatroom-time-detail">
                    <p className="chatroom-time">9.00 AM</p>
                    <div className="chatroom-pending">1</div>
                </div>
        </div>
        </>
    )
}