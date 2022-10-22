import React from "react";
import Row from 'react-bootstrap/Row';
import {Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



class HornedBeast extends React.Component {
  //this is the format for state in react
  constructor(props) {
    super(props);
    this.state = {
      //to here
      likes: 0,
    }
  }

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1,
    })
  }

  handleBeastChosen = () => {
    this.props.handleOpenModal(this.props.beastObj)
  }

  render() {
    return (
      <>
        
          <Col className='mb-5' >
          <Row className='mb-5'>
          <Card style={{ width: '19rem' }}>
            <Card.Img  variant="top" onClick={this.handleBeastChosen}
              alt={this.props.alt}
              src={this.props.src}
              title={this.props.title} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                <p>{this.state.likes}Likes</p>

              </Card.Text><Button variant="primary" onClick={this.handleLikes}>Liked💓</Button>
            </Card.Body>
          </Card>
          </Row>
          </Col>
        
      </>
    )
  }
}

//function BasicExample() {
//   return (
// {/* <article>
//           <h2 >{this.props.title}</h2>
//           <p>{this.state.likes}Likes</p>
//           <p onClick={this.handleLikes}>Liked 💓</p>
//           <img onClick={this.handleBeastChosen}
//             alt={this.props.alt}
//             src={this.props.src}
//             title={this.props.title}
//           />
//           <p>{this.props.para}</p>
//         </article> */}
//   );
// }

export default HornedBeast;



// {/* <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" onClick={this.handleBeastChosen}
//     alt={this.props.alt}
//     src={this.props.src}
//     title={this.props.title} />
//   <Card.Body>
//     <Card.Title>{this.props.title}</Card.Title>
//     <Card.Text>
//       this.props.description
//     </Card.Text>         <Button variant="primary">Liked💓</Button>
//   </Card.Body>
// </Card> */}