import React from 'react';

import classNames from 'classnames';
import { Link } from 'react-router';


class NavigationBar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-transparent navbar-absolute-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              Bob Wei ( 韋伯俞 )
            </Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav right">
              <li className={classNames({'active': this.context.router.isActive({pathname: '/products'})})}>
                <Link to="/products">
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

NavigationBar.defaultProps = {
};

NavigationBar.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default NavigationBar;
