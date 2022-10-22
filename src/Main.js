import React from 'react';
import HornedBeast from './HornedBeast.js';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

class Main extends React.Component{
  render(){
    

    let hornAnimal=this.props.data.map((beast, index)=>{
      
        return <HornedBeast 
        title={beast.title}
        para={beast.description}
        alt={beast.keyword}
        src={beast.image_url}
        key={index}
        handleOpenModal={this.props.handleOpenModal}
        beastObj={beast}
        //hornes={beast.horns}
        />
      
    });

       return(
      <>
      <main>
      <Container>
      <Row xs={2} md={4} lg={6}>
      {hornAnimal}
      </Row>
      </Container>
      </main>
      </>
    )
  }
}

export default Main;