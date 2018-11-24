import React, { Component } from 'react';
import { Container, Grid, Image, Button, TransitionablePortal, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

export default class Header extends Component {

  render() {
    return (
      <Container>
        <TransitionablePortal
          open={this.props.open}
          onOpen={() => setTimeout(() => document.body.classList.add('modal-fade-in'), 0)}
          transition={{ animation: 'scale', duration: 500 }}>
          <Modal  style={styles.modal} size="large" open={this.props.open} onClose={() => this.props.onClose()} >
            <Modal.Content >
              <Grid columns={3} centered stackable style={styles.grid}>
                <Grid.Column width={3}>
                </Grid.Column>
                <Grid.Column width={10}>
                </Grid.Column>
                <Grid.Column width={3}>
                </Grid.Column>
              </Grid>
            </Modal.Content>
          </Modal>
        </TransitionablePortal>
      </Container>
    );
  }
}

const styles = {
  modal: {
    maxWidth: "94%"
  },
  grid:{
    maxWidth: "100%",
    maxHeight: "100%"
  }
}
