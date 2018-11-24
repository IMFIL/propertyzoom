import React, { Component } from 'react';
import {
  Container,
  Grid,
  Image,
  Button,
  TransitionablePortal,
  Modal,
  Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const options = [
  { key: 'Owner', text: 'Owner', value: 'Owner' },
  { key: 'Customer', text: 'Customer', value: 'Customer' },
]

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      login: true,
      createAccount: false,
      fname: "",
      lname: "",
      username: "",
      passwornd: "",
      maximumRent: "",
      email: "",
      accountType: ""
    }
  }

  alterFormType = () => {
    this.setState({
      login: !this.state.login,
      createAccount: !this.state.account
    })
  }

  handleFormChange = (e, { field }) => {
    this.setState({[field]: e.target.value})
  }

  render() {
    const createAccountFields = this.state.login ? [] : [
      <Form.Input key="fname" value={this.state.fname} field="fname" onChange={this.handleFormChange} placeholder='First Name'/>,
      <Form.Input key="lname" value={this.state.lname} field="lname" onChange={this.handleFormChange} placeholder='Last Name'/> ,
      <Form.Input key="email" value={this.state.email} field="email" onChange={this.handleFormChange} placeholder='Email'/>,
      <Form.Input key="maximumRent" value={this.state.maximumRent} field="maximumRent" onChange={this.handleFormChange} placeholder='Maximum Rent'/>,
      <Form.Select key="accountType" value={this.state.accountType} field="accountType" onChange={this.handleFormChange} fluid label='Account Type' options={options} placeholder='Account Type' />
    ]
    return (
      <Container>
        <TransitionablePortal
          open={this.props.open}
          onOpen={() => setTimeout(() => document.body.classList.add('modal-fade-in'), 0)}
          transition={{ animation: 'scale', duration: 500 }}>
          <Modal  style={styles.modal} size="large" open={this.props.open} onClose={() => this.props.onClose()} >
            <Modal.Content >
              <Grid columns={3} centered stackable style={styles.grid}>
                <Grid.Column width={5}>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Form>
                    <Form.Input field="username" value={this.state.username} onChange={this.handleFormChange} placeholder='Username'/>
                    <Form.Input field="password" value={this.state.password} onChange={this.handleFormChange} placeholder='Password'/>
                    {createAccountFields}
                    <Button type='submit'>Submit</Button>
                    <Button onClick={this.alterFormType}>{this.state.login ? "Create account instead" : "Login instead"}</Button>
                  </Form>
                </Grid.Column>
                <Grid.Column width={5}>
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
