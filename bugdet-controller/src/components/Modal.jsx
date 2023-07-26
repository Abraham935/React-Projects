import CloseModalIcon from '../img/cerrar.svg'

const Modal = ( {setModal}) => {
    
    const closeModal = () => {
        setModal(false)
    }
    
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CloseModalIcon}
                    alt='Close modal' 
                    onClick={closeModal}
                />


            </div>

        </div>
    )
}

export default Modal