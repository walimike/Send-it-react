import React from 'react';

const innerNavbar = () => {
  return (
    <div>
      <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">Logo</a>
            <ul className="left hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li className="active"><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default innerNavbar;