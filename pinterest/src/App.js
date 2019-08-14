import React from 'react';
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
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
   search(){
       fetch(`${pathBase}?query=${this.field}&client_id=${ClientKey}`)
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
           <div>
               <input type='text' onChange={this.valueField}/>
               <button onClick={this.search}>Buscar</button>
              <div>{this.images()}</div>
           </div>
       )
   }
}
export default Key;
