import React, { Component } from 'react';
import Slider from "react-slick";
import { Image, Button } from 'semantic-ui-react';
import Property from './property';
import AddPropertyModal from './addPropertyModal';
import {Owner, fbProperty, db} from '../actions/accountActions';
const uuidv1 = require('uuid/v1');

export default class PropertyViewingList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      properties: {},
      propertiesIds: []
    }
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  componentDidMount() {
    Owner.child(this.props.userId).once("value")
    .then(snapshot => {
      if(snapshot.val().properties){
        this.getAllPropertiesInformation(snapshot.val().properties)
        .then(properties => {
          this.setState({properties, propertiesIds: snapshot.val().properties});
        })
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  addProperty = (propertyInformation) => {
    const {bathrooms, otherrooms, bedrooms, location, propertyType, rent, photos, address} = propertyInformation;
    const uid = uuidv1();
    const propertiesInState = this.state.properties;
    propertiesInState[uid] = {bathrooms, otherrooms, bedrooms, location, propertyType, rent, photos, address};
    fbProperty.child(uid).set({
      bathrooms,
      otherrooms,
      bedrooms,
      location,
      propertyType,
      rent,
      photos,
      address,
      id: uid
    })
    .then(() => {
      const pIds = this.state.propertiesIds;
      pIds.push(uid);
      var updates = {
        ['/Owner/' + this.props.userId + '/' + 'properties']: pIds
      };
      db.update(updates)
      .then(() =>  {
        this.setState({propertiesIds: pIds, properties: propertiesInState});
      })
      .catch(error => {
        console.log(error);
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  getAllPropertiesInformation = (propertiesArray) => {
    var properties = {}
    return new Promise((resolveGlobal, rejectGlobal) => {
      for (var propertyIndex = 0, p = Promise.resolve(propertyIndex); propertyIndex < propertiesArray.length; propertyIndex++) {
        p = p.then((propertyIndex) => new Promise((resolve, reject) => {
          fbProperty.child(propertiesArray[propertyIndex]).once("value")
          .then(snapshot => {
            properties[snapshot.val()['id']] = snapshot.val();
            resolve(++propertyIndex);
            return;
          })
          .catch(error => {
            console.log(error);
            rejectGlobal(error);
            return;
          })
        }));

        if(propertyIndex === propertiesArray.length-1) {
          p.then(() => {
            resolveGlobal(properties);
            return;
          })
          .catch(error => {
            console.log(error);
            rejectGlobal(error);
            return;
          })
        }
      }
    });
  }

  render() {
    var settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        <Slider {...settings}>
          {this.state.propertiesIds.map(id =>
            <Property border={false} key={id} propertyInfo={this.state.properties[id]}/>
          )}
        </Slider>

        {this.props.accountType == "Owner" &&
          <AddPropertyModal addProperty={this.addProperty}/>
        }
      </div>
    )
  }
}
