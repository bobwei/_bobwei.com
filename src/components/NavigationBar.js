import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

import SocialButton from './SocialButton';


class NavigationBar extends React.Component {

  render() {
    let likeUrl;
    try {
      likeUrl = window.location.href;
    } catch(e) {
      console.log(e);
    }
    return (
      <nav className="navbar navbar-transparent navbar-absolute-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              Bob Wei <span className="chinese-name">( 韋伯俞 )</span>
            </Link>
            <SocialButton likeUrl={likeUrl} />
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav right">
              <li className={classNames({'active': this.context.router.isActive({pathname: '/about'})})}>
                <Link to="/about">
                  關於
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
