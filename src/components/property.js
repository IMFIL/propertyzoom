import React, { Component } from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import EditProperty from './editProperty';
import 'semantic-ui-css/semantic.min.css';

export default class Property extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      border: !this.props.border ? "none" : "",
      editPropertyClicked: false
    }
  }

  render() {
    return (
      <Card  style={{boxShadow: this.state.border, ...styles.cardContainer}} fluid>
        <Image src={this.props.propertyInfo.photos[0]} />
        <Card.Content>
          <Card.Header>{this.props.propertyInfo.address}</Card.Header>
          <Card.Meta>
            <span className='price'>{"$" + this.props.propertyInfo.rent}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='home' />
            {parseInt(this.props.propertyInfo.bathrooms) + parseInt(this.props.propertyInfo.bedrooms) + parseInt(this.props.propertyInfo.otherrooms) + " Rooms"}
          </a>
          <Button onClick={() => this.setState({editPropertyClicked: true})} size="tiny" floated='right'>{this.props.viewMore ? "View More" : "Edit"}</Button>
          <EditProperty propertyInfo={this.props.propertyInfo} onClose={() => this.setState({editPropertyClicked: false})} open={this.state.editPropertyClicked}/>
        </Card.Content>
      </Card>
    );
  }
}

const styles = {
  cardContainer: {
    marginBottom: "20px"
  }
}
