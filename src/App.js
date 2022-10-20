//imports
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import './App.css';
import Modal from 'react-bootstrap/Modal';

//class comp

class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      showModal: false,
      slelectedBeast: {}
    }
  }

handleCloseModal = () =>{
  this.setState({
    showModal: false
  })
}

handleOpenModal = (beastObj)=>{
  this.setState({
    showModal: true,
    slelectedBeast: beastObj,
  })
}

  render(){
    return (
      <>
     <Header
      />
      <Main
       data={data}
       handleOpenModal={this.handleOpenModal} 
       />
      <Modal
       show={this.state.showModal}
       onHide={this.handleCloseModal}
      >
         <Modal.Header closeButton>
         <Modal.Title>{this.state.slelectedBeast.title}</Modal.Title>
         </Modal.Header>
         <img alt={this.state.slelectedBeast.description} src={this.state.slelectedBeast.image_url}/>
         <p>{this.state.slelectedBeast.description}</p> 
         
          
        </Modal>
      <Footer />
      </>
    )
  }
}

//export
export default App;