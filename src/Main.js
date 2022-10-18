import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component{
  render(){
    return(
      <>
      <main>
      <HornedBeast src={"http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"} title="A unicorn and a narwhal" alt="Unicorn and Narwhal horn fist bumping" para="Unicorn and Narwhal horn fist bumping!" name="A unicorn and a Narwhal" />

      <HornedBeast src={"https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"} title="A unicorn head and a shirt" alt="A unicorn wearing blue smiling hoodie" para="What mask its find the smily face, smile!" name="A unicorn head and a shirt" />
      </main>
      </>
    )
  }
}

export default Main;