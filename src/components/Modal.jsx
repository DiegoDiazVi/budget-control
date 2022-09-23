import React from 'react'
import Close from '../img/cerrar.svg'

const Modal = ({setModal}) => {

    const hideModal = () => {
        setModal(false);
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={Close}
                    alt="Close"
                    onClick={hideModal}
                />
            </div>
        </div>
    )
}

export default Modal