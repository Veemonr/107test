
export default function Modal({ changeModal, settingBool, changeSetting }) {
    return (
        <>
            <div className="modal preload">
                <div className="black-screen" />
                <div className="modal-message">
                    <div className="modal-title">
                        <p>Custom Instructions</p>
                        <div onClick={changeSetting} className={ settingBool ? "modal-toggle toggle-green" : "modal-toggle toggle-background-off"}>
                            <div className={ settingBool ? "toggle-button toggle-button-on" : "toggle-button toggle-button-off"} />
                        </div>
                    </div>
                    <p className="modal-description modal-grey">What would you like ChatGPT to know about you to provide better responses?</p>
                    <input className="first-input input-modal" type="text" />
                    <p className="modal-grey modal-description">How would you like ChatGPT to respond?</p>
                    <input className="second-input input-modal" type="text" />
                    <div className="close-setting">
                        <div onClick={changeModal} className="modal-cancel modal-box">
                            Cancel
                        </div>
                        <div onClick={changeModal} className="modal-save modal-box">
                            Save
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}