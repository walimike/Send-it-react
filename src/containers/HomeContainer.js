import React, { Component } from 'react';


import CreateParcelContainer from './CreateParcel';
import RetrieveParcels from './RetrieveParcels';

export default class HomeContainer extends Component {

  logout=()=>{
    sessionStorage.clear();
    /* istanbul ignore next */
    window.location.href="/"
  }

  render() {
    return (
        <div>
            <nav>
          <div className="nav-wrapper red">
            <a href="#!" className="brand-logo left">Send it</a>
            <ul className="right hide-on-med-and-down">
              <li className="active"><a  onClick={this.logout}>Logout</a></li>
            </ul>
          </div>
        </nav>
                <div className="container">
        <div className="row">
        <div className="col s6">
            <CreateParcelContainer/>
        </div>
        <div className="col s6">
            <RetrieveParcels/>
        </div>
        </div>
        
        
      </div>
        </div>
    )
  }
}
