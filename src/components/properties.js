import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Property from './property';

export default class Properties extends Component {

  render() {
    return (
      <Grid centered stackable columns={3}>
        <Grid.Row centered>
          <Grid.Column width={5}>
            <Property/>
          </Grid.Column>
          <Grid.Column width={5}>
            <Property/>
          </Grid.Column>
          <Grid.Column width={5}>
            <Property/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column width={5}>
            <Property/>
          </Grid.Column>
          <Grid.Column width={5}>
            <Property/>
          </Grid.Column>
          <Grid.Column width={5}>
            <Property/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

}
