//imports


import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import './App.css';

//class comp

class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      
    }
  }
  render(){
    return (
      <>
     <Header />
      <Main data={data} />
      <Footer />
      </>
    )
  }
}

//export
export default App;