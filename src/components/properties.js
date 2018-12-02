import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Property from './property';
import {Owner, fbProperty, db} from '../actions/accountActions';

export default class Properties extends Component {
  componentDidUpdate(prevProps) {
  }

  onDeleteProperty = (id) => {
    if(this.props.userInfo.accountType == "Owner" && this.props.userInfo.userId != "") {
      Owner.child(this.props.userInfo.userId).once("value")
      .then(snapshot => {
        var newProps = []
        for(var i=0; i< snapshot.val().properties.length; i++) {
          if(snapshot.val().properties[i] != id) {
            newProps.push(snapshot.val().properties[i]);
          }
        }

        var updates = {
          ['/Owner/' + this.props.userInfo.userId + '/' + 'properties']: newProps
        };
        fbProperty.child(id).remove()
        .then(() => {
          db.update(updates)
          .then(() =>  {
            console.log("here")
            this.props.updateProperties();
            this.props.deletePropertyFromViewingList(id);
          })
          .catch(error => {
            console.log(error);
          })
        })
        .catch(error => {
          console.log(error)
        })
      })
      .catch(error => {
        console.log(error);
      })
    }
  }

  render() {
    const keys = Object.keys(this.props.properties);
    const fullRows = Math.floor(keys.length/3);
    const partialRows = keys.length % 3;
    var rows = [];
    var remainderCols = []

    for(var i = 0; i < fullRows * 3;) {
      rows.push(
        <Grid.Row key={keys[i] + "rows"}>
          <Grid.Column>
            <Property onDelete={this.onDeleteProperty} userInfo={this.props.userInfo} viewMore={true} propertyInfo={this.props.properties[keys[i]]}/>
          </Grid.Column>
          <Grid.Column>
            <Property onDelete={this.onDeleteProperty} userInfo={this.props.userInfo} viewMore={true} propertyInfo={this.props.properties[keys[i + 1]]}/>
          </Grid.Column>
          <Grid.Column>
            <Property onDelete={this.onDeleteProperty} userInfo={this.props.userInfo} viewMore={true} propertyInfo={this.props.properties[keys[i + 2]]}/>
          </Grid.Column>
        </Grid.Row>
      );
      i+=3;
    }
    for(var j = 0; j < partialRows; j++) {
      remainderCols.push(
        <Grid.Column key={keys[j] + "remainder"}>
          <Property onDelete={this.onDeleteProperty} userInfo={this.props.userInfo} viewMore={true} propertyInfo={this.props.properties[keys[j]]}/>
        </Grid.Column>
      );
    }

    return (
      <div style={styles.propertiesContainer}>
        <Grid columns={3}>
          {rows}
          <Grid.Row>
            {remainderCols}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const styles = {
  propertiesContainer: {
    paddingBottom: "50px",
    paddingLeft: "20px",
    paddingRight: "20px"
  }
}
