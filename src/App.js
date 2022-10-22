//imports
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import './App.css';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

//class comp

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      slelectedBeast: {},
      sortedData: data  //this will be else
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleOpenModal = (beastObj) => {
    this.setState({
      showModal: true,
      slelectedBeast: beastObj,
    })
  }

  handleSelect = (event)=>{
    let selected= event.target.value;
    if(selected === '1'){
      let newData = data.filter(beast=>beast.horns === 1);
      this.setState({
        sortedData: newData
      })
    }else if(selected === '2'){
      let newData = data.filter(beast=>beast.horns === 2);
      this.setState({
        sortedData: newData
      })
  }else if(selected === '3'){
    let newData = data.filter(beast=>beast.horns === 3);
    this.setState({
      sortedData: newData
    })
  }else if(selected === '100'){
  let newData = data.filter(beast=>beast.horns === 100);
  this.setState({
    sortedData: newData
  })
}else{
  this.setState({
    sortedData: data
  })
}

}

  render() {
    return (
      <>
        <Header
        />
        <Form>
          <Form.Group>
              <legend>Number of Horns</legend>
              <Form.Select name='selected' id='' onChange={this.handleSelect}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='100'>100</option>
              </Form.Select>
            </Form.Group>
          </Form>
        <Main
          data={this.state.sortedData}
          handleOpenModal={this.handleOpenModal}
        />
        <Modal 
          show={this.state.showModal}
          onHide={this.handleCloseModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.slelectedBeast.title}</Modal.Title>
          </Modal.Header>
          <img alt={this.state.slelectedBeast.description} src={this.state.slelectedBeast.image_url} />
          <p>{this.state.slelectedBeast.description}</p>


        </Modal>
        <Footer />
      </>
    )
  }
}

//export
export default App;