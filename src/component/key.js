import React from 'react';

 const ClientKey = '7df746a39c7d1e29b2c68278355a50da016e7e94816ebfd676628c4456dbc917';
 const pathBase = 'https://api.unsplash.com/search/photos';

class Key extends React.Component{

    constructor(){
        this.field ='';
        this.valueField = this.valueField.bind(this);
        this.search = this.this.search.bind(this);

        this.state = {
            images:[]
        }
    }
    search(){
        fetch(`${pathBase}?query=${this.field}&client_id=${ClientKey}`)
            .then(res=>{
                return res.json()
            }).then(jsonRes=>{
                console.log(jsonRes);
            })
    }

    trackQueryValue(ev){
        this.field = ev.target.value;
    }
    render(){
        return (
            <div>
                <input type='text' onChange={this.trackQueryValue}/>
                <button onClick={this.search}>Buscar</button>
            </div>
        )
    }
}
export default Key;