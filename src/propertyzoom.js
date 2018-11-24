import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';

class Propertyzoom extends Component {
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
  return {
    //currentPano: state.spheres.currentPano,
    }
};

const mapDispatchToProps = dispatch => ({
  // fetchStoreData: () => dispatch(fetchStoreData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Propertyzoom);
