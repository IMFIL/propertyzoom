import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';
import { createAccount, signIn } from './actions/accountActions'
import * as firebase from 'firebase';

class Propertyzoom extends Component {

  componentDidMount() {
    this.props.signIn("asdfaf@yaga.com", "yeetyeet");
  }

  render() {
    return (
      <div>
        <Button>
          propertyzoom
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    //currentPano: state.spheres.currentPano,
    }
};

const mapDispatchToProps = dispatch => ({
   createAccount: (email, password) => dispatch(createAccount(email, password)),
   signIn: (email, password) => dispatch(signIn(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Propertyzoom);
