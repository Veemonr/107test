import { useState } from "react";
import Navbar from "./components/Navbar";
import { UserContext } from "./UserContext";
import MessageList from "./components/messageList";
import MessagerRoom from "./components/MessagerRoom";
import Modal from "./components/Modal";

function App() {
  const [userTheme, setUserTheme] = useState("107");
  const [modalSetting, setModalSetting] = useState(false)
  const [settingBool, setSettingBool] = useState(true)
  function changeUserTheme() {
    if(userTheme === "107") setUserTheme("Ato")
    else setUserTheme("107")
  }
  function changeSetting() {
    setSettingBool(!settingBool)
  }
  function changeModal() {
    setModalSetting(!modalSetting)
  }
  return (
    <>
      <UserContext.Provider value={userTheme}>
          { modalSetting ? <Modal settingBool={settingBool} changeSetting={changeSetting} changeModal={changeModal} /> : "" }
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
