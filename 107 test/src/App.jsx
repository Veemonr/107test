import { useState } from "react";
import Navbar from "./components/Navbar";
import { UserContext } from "./UserContext";
import MessageList from "./components/messageList";
import MessagerRoom from "./components/MessagerRoom";
import Modal from "./components/Modal";

function App() {
  const [userTheme, setUserTheme] = useState("107");
  const [modalSetting, setModalSetting] = useState(false)
  function changeUserTheme() {
    if(userTheme === "107") setUserTheme("Ato")
    else setUserTheme("107")
  }
  function changeModal() {
    setModalSetting(!modalSetting)
  }
  return (
    <>
      <UserContext.Provider value={userTheme}>
          { modalSetting ? <Modal changeModal={changeModal} /> : "" }
        <div className="body">
          <Navbar changeUserTheme={changeUserTheme} changeModal={changeModal} />
          <MessageList />
          <MessagerRoom />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
