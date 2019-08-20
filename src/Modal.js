import React from 'react';

const Modal = ({isModalOpen, onClose, urlImg}) =>{
    const classNameModal= isModalOpen? "modal display-block": "modal display-none";
    return(
        <div className={classNameModal}>
            <section className="modal-body">
                <nav className="nav-modal">
                    <div className="ellipsis-modal">
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                    <div className="nav-button">
                        <button className="nav-upload"><i className="fas fa-upload"> <p>Enviar</p></i></button>
                        <button className="nav-pine"><i className="fas fa-thumbtack"> <p>Guardar</p></i></button>
                    </div>
                </nav>
                <div className="modal-img">
                    <img src={urlImg} alt="Not Fount"/>    
                </div>   
            </section>
             <div className="times-modal">
                <div className="content-button">
                    <button className="times-button" onClick={onClose}><i className="fas fa-times"></i></button>
                </div>
             </div>
             <div className="last-button">
                <div className="plus-modal">
                    <i className="fas fa-plus"></i>
                </div>
                <div className="question-modal">
                    <i className="fas fa-question"></i>
                </div>
             </div>
        </div>
    )
}
export default Modal;