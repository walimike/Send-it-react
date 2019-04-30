import React, { Component } from 'react';
import { connect } from 'react-redux';

import CreateParcel from '../components/parcels/CreateParcel';
import createParcelAction from "../actions/createParcel";

export class CreateParcelContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
	
            "source":"",
            "destination":"",
            "price":3000,
            "parcel_name" :""
        }
      }

      parcelNameChange = event => this.setState({ parcel_name: event.target.value });
      sourceChange = event => this.setState({ source: event.target.value });
      destinationChange = event => this.setState({ destination: event.target.value });
      priceChange = event => this.setState({
        [event.target.value]: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value
      });

      createParcels = (event) =>{
        event.preventDefault();
        this.props.createParcel({...this.state, price :parseInt(this.state.price)})
      }

  render() {
    return (
    <div >
          <div className="card grey lighten-5 z-depth-1">
            <div className="card-content">
              <span className="card-title center">Create Parcel</span>
            </div>
            <div className="card-action">
            <CreateParcel
                source = {this.state.source}
                destination = {this.state.destination}
                price = {this.state.price}
                parcelName = {this.state.parcel_name}
                parcelNameChange = {this.parcelNameChange} 
                sourceChange = {this.sourceChange}
                destinationChange= {this.destinationChange}
                priceChange = {this.priceChange}
                createParcels = {this.createParcels}
            />
            </div>
          </div>
          </div>
    )
  }
}


export const mapStateToProps = state => {
    return state;
  };

export const mapDispatchToProps = dispatch => ({
    createParcel: (data) => {
      /* istanbul ignore next */   
      dispatch(createParcelAction(data));
    }
    
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(CreateParcelContainer);
