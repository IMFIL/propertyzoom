import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';
import { signIn } from './actions/signInAction'

class Propertyzoom extends Component {

  componentDidMount() {
    this.props.signIn();
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
   signIn: () => dispatch(signIn())
});

export default connect(mapStateToProps, mapDispatchToProps)(Propertyzoom);
