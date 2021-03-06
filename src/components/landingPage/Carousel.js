import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.js";

class Carousel extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".carousel");
    var config = {
      dist: 0,
      fullWidth: true,
      duration: 400,
      indicators: true,
    };
    M.Carousel.init(elems, config);
  }


  render() {
    return (
      <div className="carousel carousel-slider center">
        <div className="carousel-fixed-item center">
          <div className="fixed-item-text">
            
          </div>
        </div>
        <a className="carousel-item" href="#three!">
          <img src="../../assets/images/101-express-courier.jpg" />
        </a>
      </div>
    );
  }
}

export default Carousel;
