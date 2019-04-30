import React, { Component } from 'react';
import ParcelTable from '../components/parcels/Parceltable';
import axios from 'axios';

export default class RetrieveParcels extends Component {
  constructor(props) {
    super(props);
   this.state = {
      parcels:[]
    };
  }

  componentWillMount(){
    return axios
      .get("https://wali-sendit.herokuapp.com/v2/api/users/parcels", {
        headers :{accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`
      }})
      .then(re => this.setState({parcels:re.data.Parcel}))
  }

  render() {
    return (
      <div >
          <div className="card grey lighten-5 z-depth-1">
            <div className="card-content">
              <span className="card-title center">Parcels</span>
            </div>
            <div className="card-action">
            <ParcelTable parcels={this.state.parcels} />
            </div>
          </div>
          </div>
    )
  }
}

