import React, { Component } from 'react';
import Slider from "react-slick";
import { Image } from 'semantic-ui-react'
import Property from './property';

export default class PropertyViewingList extends Component {
  render() {
    var settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <Slider {...settings}>
          <Property/>
          <Property/>
        </Slider>
      </div>
    )
  }
}
