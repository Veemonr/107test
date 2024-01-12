
export default function Modal({ changeModal }) {
    return (
        <>
            <div className="modal">
                <div className="black-screen" />
                <div className="modal-message">
                    <p className="modal-title">Custom Instructions</p>
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