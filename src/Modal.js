import React from 'react';

const Modal = ({isModalOpen, onClose, urlImg}) =>{
    const classNameModal= isModalOpen? "modal display-block": "modal display-none";
    return(
        <div className={classNameModal}>
            <section className="modal-body">
                <img src={urlImg} alt="Not Fount"/>
                <button onClick={onClose}>Cerrar</button>
                <button><i class="fas fa-upload"></i></button>
                <i class="fas fa-thumbtack"></i>
            </section>
        </div>
    )
}
export default Modal;