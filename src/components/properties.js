import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Property from './property';

export default class Properties extends Component {

  render() {
    return (
      <div style={styles.propertiesContainer}>
        <Grid centered stackable columns={3}>
          <Grid.Row centered>
            <Grid.Column width={5}>
            </Grid.Column>
            <Grid.Column width={5}>

            </Grid.Column>
            <Grid.Column width={5}>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered>
            <Grid.Column width={5}>
            </Grid.Column>
            <Grid.Column width={5}>
            </Grid.Column>
            <Grid.Column width={5}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const styles = {
  propertiesContainer: {
    paddingBottom: "50px"
  }
}
