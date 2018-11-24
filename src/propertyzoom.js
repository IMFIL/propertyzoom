import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Header from './components/header';
import Footer from './components/footer';
import Properties from './components/properties';
import { connect } from 'react-redux';
import { createAccount, signIn } from './actions/accountActions'
import * as firebase from 'firebase';

class Propertyzoom extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userId: ""
    }
  }

  componentDidMount() {
    this.props.signIn("asdfaf@yaga.com", "yeetyeet");
  }

  render() {
    return (
      <div>
        <Header userId={this.props.userId}/>
        <Properties/>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userID: state.userInfo.userId,
    }
};

const mapDispatchToProps = dispatch => ({
   createAccount: (email, password) => dispatch(createAccount(email, password)),
   signIn: (email, password) => dispatch(signIn(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Propertyzoom);
