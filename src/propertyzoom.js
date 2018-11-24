import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Header from './components/header';
import Footer from './components/footer';
import Properties from './components/properties';
import LoginModal from './components/loginModal';
import { connect } from 'react-redux';
import { createAccount, signIn } from './actions/accountActions'
import * as firebase from 'firebase';

class Propertyzoom extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  componentDidMount() {
  }

  launchLoginModal = () => {
    this.setState({open: true})
  }

  closeLoginModal = () => {
    this.setState({open: false})
  }

  render() {
    return (
      <div>
        <Header userId={this.props.userId} login={this.launchLoginModal} />
        <LoginModal onClose={this.closeLoginModal} open={this.state.open}/>
        <Properties/>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.userInfo.userId,
    }
};

const mapDispatchToProps = dispatch => ({
   createAccount: (email, password) => dispatch(createAccount(email, password)),
   signIn: (email, password) => dispatch(signIn(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Propertyzoom);
