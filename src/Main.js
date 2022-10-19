import React from 'react';
import HornedBeast from './HornedBeast.js';



class Main extends React.Component{
  render(){
    

    let hornAnimal=this.props.data.map((beast, index)=>{
      
        return <HornedBeast 
        title={beast.title}
        para={beast.description}
        alt={beast.keyword}
        src={beast.image_url}
        key={index}
        //hornes={beast.horns}
        />
      
    });

       return(
      <>
      <main>
      {hornAnimal}
      </main>
      </>
    )
  }
}

export default Main;