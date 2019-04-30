import React, { Component } from 'react';

import CreateParcelContainer from './CreateParcel';
import innerNavbar from '../components/landingPage/innerNavbar';

export default class HomeContainer extends Component {
  render() {
    return (
        <div>
            <nav>
          <div className="nav-wrapper red">
            <a href="#!" className="brand-logo left">Send it</a>
            <ul className="right hide-on-med-and-down">
              <li className="active"><a href="collapsible.html">Logout</a></li>
            </ul>
          </div>
        </nav>
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
