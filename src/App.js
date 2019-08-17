import React from 'react';
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

const ClientKey = '7df746a39c7d1e29b2c68278355a50da016e7e94816ebfd676628c4456dbc917';
const pathBase = 'https://api.unsplash.com/search/photos';

class Key extends React.Component{

   constructor(props){
     super(props)
       this.field ='';
       this.valueField = this.valueField.bind(this);
       this.search = this.search.bind(this);

       this.state= {
         images:[]
       }
   }

   componentDidMount() {

    fetch(`https://api.unsplash.com/photos?per_page=1000&client_id=${ClientKey}`)

    .then(res=>{
      return res.json()
  }).then(jsonRes=>{
      console.log(jsonRes);
      this.setState({
        images: jsonRes
      })
  })
}

   search(){
       fetch(`${pathBase}?per_page=1000&query=${this.field}&client_id=${ClientKey}`)
           .then(res=>{
               return res.json()
           }).then(jsonRes=>{
               console.log(jsonRes);
               this.setState({
                 images: jsonRes.results
               })
           })
   }

   valueField(ev){
       this.field = ev.target.value;
   }

   images(){
return this.state.images.map(i=>{
  return <img src={i.urls.thumb} alt="No hay imagenes" key={i.id} />
   
})
   }

   render(){
       return (
           <>
            <header>
               <nav className="nav-container">
                <ul className="list-nav">
                <li>
                  <div className="logo-container">
                    <i className="fab fa-pinterest"></i>
                  </div>
                </li>
                
                  <li>
                  <div className="search-container">  
                    <button onClick={this.search}><i className="fas fa-search"></i></button>
                    <input type='text' onChange={this.valueField}/>
                    <button><i className="fas fa-times"></i></button>
                    <div className="all-pines">Todos los pines</div>
                    <button><i className="fas fa-chevron-down"></i></button>
                    </div>
                  </li>
              
                <li>
                  <div className="friends-container">
                    <i className="fas fa-user-friends"></i>
                  </div>
                </li>
                <li>
                  <div className="user-container">
                  <i className="fas fa-circle"></i>
                  </div>
                </li>
                <li>
                  <div className="divisor-container">
                    |
                  </div>
                </li>
                <li>
                  <div className="coment-container">
                    <i className="fas fa-comment-dots"></i>
                  </div>
                </li>
                <li>
                  <div className="bell-container">
                    <i className="fas fa-bell"></i>
                  </div>
                </li>
                <li>
                  <div className="ellipsis-container">
                    <i className="fas fa-ellipsis-h"></i>
                  </div>
                </li>
                </ul>
              </nav>
            </header>
            <section>
              <div className="center-container"> 
              <div className="img-container">
                {this.images()}
              </div>
              </div> 
            </section> 
           </>
       )
   }
}
export default Key;