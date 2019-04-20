import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="page-footer custom">
        <div className="footer-copyright">
          <div className="container center">
            <div className="row">
              <i className="socicon-facebook px-2" />
              <i className="socicon-twitter px-2" />
              <i className="socicon-instagram px-2" />
            </div>
            Copyright © 2019 walimike. All rights reserved.
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
