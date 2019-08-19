import React from 'react';
// import ReactDOM from 'react-dom'

class Modal extends React.Component{
    render(){
        const onClose = this.props;
        // return ReactDOM.createPortal(
            return(
            <div className="modal">
                <section className="modal-body">
                    <h1>Modal de Prueba</h1>
                    <p>Modal para las imágenes</p>
                    <button onClick={onClose}>Cerrar</button>
                </section>
            </div>
            // document.getElementById('modal')
        )
    }
}
export default Modal;

// class Modal extends React.Component {
//     render () {
//       const { isOpen, onClose } = this.props;
   
//       return (
//         <div className={isOpen ? 'modal modal--is-open' : 'modal'}>
//           <button onClick={onClose}>close</button>
   
//           <p>Hello! I am a modal.</p>
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render( <Modal />,document.getElementById('react-container'));