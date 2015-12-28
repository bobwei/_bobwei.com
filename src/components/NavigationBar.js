require('../styles/NavigationBar.scss');

import React from 'react';
import { Link } from 'react-router';


class NavigationBar extends React.Component {
  render() {
    return (
      <div className="navigation-bar">
        <div className="container">
          <Link to='/' className="item" activeClassName="active">
            Home
          </Link>
          <Link to='/portfolio' className="item" activeClassName="active">
            Portfolio
          </Link>
        </div>
      </div>
    );
  }
}

NavigationBar.defaultProps = {
};

export default NavigationBar;
