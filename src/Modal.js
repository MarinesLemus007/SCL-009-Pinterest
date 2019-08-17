import ReactDOM from 'react-dom'

class Moda extends React.Component{
    render(){
        return (
            <div className="modal">
                <section className="modal-body">
                    <h1>Modal de Prueba</h1>
                    <p>Modal para las imágenes</p>
                    <button onClick={this.props.onClosed}>Cerrar</button>
                </section>
            </div>
        )
    }
}