import React from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';



class HornedBeast extends React.Component {
  //this is the format for state in react
  constructor(props){
    super(props);
    this.state={
  //to here
  likes: 0,
    }
  }

  handleLikes = ()=>{
    this.setState({
      likes: this.state.likes + 1,
    })
  }

  render() {
    return (
      <>
      <article>
      <h2>{this.props.title}</h2>
      <p>{this.state.likes}Likes</p>
      <p onClick={this.handleLikes}>Liked 💓</p>
      <img 
        alt={this.props.alt}
        src={this.props.src} 
        title={this.props.title} 
      />
      <p>{this.props.para}</p>
      </article>
      </>
    )
  }
}

//function BasicExample() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={this.props.src/100px180} />
//       <Card.Body>
//         <Card.Title>{this.props.title}</Card.Title>
//         <Card.Text>
//           {this.props.alt}
//         </Card.Text>
//         <Button variant="primary">Liked💓</Button>
//       </Card.Body>
//     </Card>
//   );
// }

export default HornedBeast;