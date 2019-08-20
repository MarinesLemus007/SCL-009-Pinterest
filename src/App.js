import React from 'react';
import Modal from './Modal';
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import InfiniteScroll from 'react-infinite-scroll-component';

const ClientKey = '7df746a39c7d1e29b2c68278355a50da016e7e94816ebfd676628c4456dbc917';
const pathBase = 'https://api.unsplash.com/search/photos';

class Key extends React.Component{
  constructor(props){
    super(props);
      this.field ='';
      this.valueField = this.valueField.bind(this);
      this.search = this.search.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.toggleClass= this.toggleClass.bind(this);
      this.offToggleClass= this.offToggleClass.bind(this);
      this.state= {
        active: false,
        images:[],
        isModalOpen: false,
        urlImg:"",
        numLimit:500,
        numStart:1
      }
  }

  componentDidMount() {
    const {numLimit,  numStart} = this.state;
    fetch(`https://api.unsplash.com/photos?per_page=${numLimit}&client_id=${ClientKey}&${numStart}`)
    .then(res=>{
      return res.json()
    }).then(jsonRes=>{
      console.log(jsonRes);
      this.setState({
        images: jsonRes
      })
    })
  }

  fetchData=()=>{
    const {numLimit,  numStart} = this.state;
    this.setState({numStart: this.state.numStart + numLimit})
    fetch(`https://api.unsplash.com/photos?per_page=${numLimit}&client_id=${ClientKey}&${numStart}`)
    .then(res=>{
      return res.json()
    }).then(jsonRes=>{
      console.log(jsonRes);
      this.setState({
        images: this.state.images.concat(jsonRes)
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
    return(
      this.state.images.map(i=>{
        return (
          <>
          <button className="buttom-img"
            onClick={()=>this.openModal(i.urls.thumb)}>
            <img
            src={i.urls.thumb}
            alt="Not Fount"
            key={i.id} />
          </button>
       </>
      )
    })
    )
  }

  openModal(urlImg) {
    console.log(urlImg);
    this.setState({isModalOpen: true});
    this.setState({urlImg: urlImg});
  }
  
  closeModal= () =>{
    this.setState({ isModalOpen: false });
  }
  
  toggleClass() {
    this.setState({ active: true });
  }
  
  offToggleClass(){
    this.setState({ active: false })
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
                    <div className={this.state.active ? "border-search": null}
                      onClick={this.toggleClass} onMouseLeave={this.offToggleClass}>  
                      <button onClick={this.search}><i className="fas fa-search"></i></button>
                      <input type='text' placeholder="Buscar" onChange={this.valueField}/>
                      <button><i className="fas fa-times"></i></button>
                    </div>
                    <div className="all-pines">Todos los pines
                      <button><i className="fas fa-chevron-down"></i></button>
                    </div>
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
              <InfiniteScroll
                dataLength={this.state.images.length}
                next={this.fetchData}
                hasMore={true}
                loader={<i className="fas fa-spinner"></i>}
              >
                {this.images()}
              </InfiniteScroll>
            </div>
          </div> 
        </section>
        <Modal isModalOpen={this.state.isModalOpen} urlImg={this.state.urlImg} onClose={this.closeModal}/>
      </>
    )
  }
}
export default Key;