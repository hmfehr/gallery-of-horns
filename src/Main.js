import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';


class Main extends React.Component{
  render(){
    

    let hornAnimal=data.map((beast, index)=>{
      
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