import React, { Component } from 'react';
import { Segment, Grid, Image, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

export default class Header extends Component {

  render() {
    return (
      <Segment>
        <Grid>
          <Grid.Column width={3}>
            <Image size='small' src={require('../assets/propertyZoom.png')} />
          </Grid.Column>
          <Grid.Column width={11}>
          </Grid.Column>
          <Grid.Column width={2} textAlign='center'>
            { this.props.userId == "" &&
              <Button color='teal'>Login</Button>
            }

            { this.props.userId != "" &&
              <Button color='teal'>My account</Button>
            }
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }

}
