import React, { Component } from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

export default class Property extends Component {

  render() {
    return (
      <Card>
        <Image src='https://i.pinimg.com/originals/fd/c5/b3/fdc5b3520870af529fa626369db16265.jpg' />
        <Card.Content>
          <Card.Header>98 Bardier Street</Card.Header>
          <Card.Meta>
            <span className='price'>$30 000</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='home' />
            5 Rooms
          </a>
          <Button size="tiny" floated='right'>View More</Button>
        </Card.Content>
      </Card>
    );
  }

}
