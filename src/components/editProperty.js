import React, { Component } from 'react';
import { Modal, Grid, Image, Button, Label, Form, Divider } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

export default class EditProperty extends Component {

  constructor(props){
    super(props);

    console.log(props)

    this.state = {
      bedrooms: props.propertyInfo.bedrooms,
      bathrooms: props.propertyInfo.bathrooms,
      otherrooms: props.propertyInfo.otherrooms,
      rent: parseInt(props.propertyInfo.rent),
      okayToUpdateRent: false,
      okayToUpdateBedrooms: false,
      okayToUpdateBathrooms: false,
      okayToUpdateOtherrooms: false
    };
  }

  handleBedroomsChange = (e, { field }) => {
    var okayToUpdateBedrooms = false;

    if(e.target.value.trim() != "" && e.target.value.trim() != this.props.propertyInfo.bedrooms) {
      okayToUpdateBedrooms = true;
    }

    this.setState({[field]: e.target.value, okayToUpdateBedrooms});
  }

  updateBedrooms = () => {
    const { bedrooms, okayToUpdateBedrooms} = this.state;
    const propertyInformation = {};

    if(okayToUpdateBedrooms) {
      propertyInformation.bedrooms = bedrooms;
      this.props.onUpdate(propertyInformation);
    }
  }

  handleBathroomsChange = (e, { field }) => {
    var okayToUpdateBathrooms = false;

    if(e.target.value.trim() != "" && e.target.value.trim() != this.props.propertyInfo.bathrooms) {
      okayToUpdateBathrooms = true;
    }

    this.setState({[field]: e.target.value, okayToUpdateBathrooms});
  }

  handleOtherroomsChange = (e, { field }) => {
    var okayToUpdateOtherrooms = false;

    if(e.target.value.trim() != "" && e.target.value.trim() != this.props.propertyInfo.otherrooms) {
      okayToUpdateOtherrooms = true;
    }

    this.setState({[field]: e.target.value, okayToUpdateOtherrooms});
  }

  handleRentChange = (e, { field }) => {
    var okayToUpdateRent = false;

    if(e.target.value != "" && e.target.value != this.props.propertyInfo.rent) {
      okayToUpdateRent = true;
    }

    this.setState({[field]: e.target.value, okayToUpdateRent});
  }

  render() {
    return (
      <Modal size="small" closeIcon
        open={this.props.open}
        onClose={this.props.onClose}>
        <Modal.Header>Edit Property</Modal.Header>
        <Modal.Content>
          <Grid columns={1} centered>
            <Grid.Column width={14}>
              <Label>{this.props.propertyInfo.address}</Label>
              <Label>{this.props.propertyInfo.propertyType}</Label>
              <Label>{this.props.propertyInfo.location}</Label>
              <Divider />
              <Form>
                <Grid columns={2}>
                  <Grid.Column>
                    <Grid.Row style={styles.formRows}>
                      <Form.Input size='small' field="bedrooms" type="number" value={this.state.bedrooms} onChange={this.handleBedroomsChange} placeholder='Bedrooms'/>
                    </Grid.Row>
                    <Grid.Row style={styles.formRows}>
                      <Form.Input size='small' field="bathrooms" type="number" value={this.state.bathrooms} onChange={this.handleBathroomsChange} placeholder='Bathrooms'/>
                    </Grid.Row>
                    <Grid.Row style={styles.formRows}>
                      <Form.Input size='small' field="otherrooms" type="number" value={this.state.otherrooms} onChange={this.handleOtherroomsChange} placeholder='Other rooms'/>
                    </Grid.Row>
                    <Grid.Row style={styles.formRows}>
                      <Form.Input size='small' field="rent" type="number" value={this.state.rent} onChange={this.handleRentChange} placeholder='rent'/>
                    </Grid.Row>
                  </Grid.Column>
                  <Grid.Column>
                    <Grid.Row style={styles.formRows}>
                      <Button loading={this.state.loading} onClick={this.updateBedrooms} disabled={!this.state.okayToUpdateBedrooms} size='small'>Change number of Bedrooms</Button>
                    </Grid.Row>
                    <Grid.Row style={styles.formRows}>
                      <Button loading={this.state.loading} onClick={this.updateBathrooms} disabled={!this.state.okayToUpdateBathrooms} size='small'>Change number of Bathrooms</Button>
                    </Grid.Row>
                    <Grid.Row style={styles.formRows}>
                      <Button loading={this.state.loading} onClick={this.updateOtherrooms} disabled={!this.state.okayToUpdateOtherrooms} size='small'>Change number of Other rooms</Button>
                    </Grid.Row>
                    <Grid.Row style={styles.formRows}>
                      <Button loading={this.state.loading} onClick={this.updateRent} disabled={!this.state.okayToUpdateRent} size='small'>Change Rent</Button>
                    </Grid.Row>
                  </Grid.Column>
                </Grid>
              </Form>
            </Grid.Column>
          </Grid>
        </Modal.Content>
      </Modal>
    );
  }
}

const styles = {
  headerContainer: {
    width: "100%"
  },
  formRows: {
    marginTop: "10px",
    marginBottom: "10px"
  },
}
