import React, { Component } from 'react';

import CreateParcelContainer from './CreateParcel';
import innerNavbar from '../components/landingPage/innerNavbar';

export default class HomeContainer extends Component {
  render() {
    return (
        <div>
            <innerNavbar />
                <div className="container">
        <div className="row">
        <div className="col s6">
            <CreateParcelContainer/>
        </div>
        </div>
        
        
      </div>
        </div>
    )
  }
}
