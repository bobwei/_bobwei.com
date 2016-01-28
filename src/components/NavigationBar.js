import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import jQuery from 'jquery';

import SocialButton from './SocialButton';


class NavigationBar extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isMenuHidden: true
    };
  }

  componentDidMount() {
    this.keyupEvent = (event) => {
      if (event.keyCode === 27){
        this.onBarsClick();
      }
    };
    jQuery(window).keyup(this.keyupEvent);
  }

  componentWillUnmount() {
    jQuery(window).unbind('keyup', this.keyupEvent);
  }

  onBarsClick() {
    this.setState({ isMenuHidden: !this.state.isMenuHidden });
  }

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
            <i
              className="navbar-brand fa fa-bars visible-xs-block"
              onClick={this.onBarsClick.bind(this)}
            />
            <Link to="/" className="navbar-brand">
              Bob Wei <span className="chinese-name">( 韋伯俞 )</span>
            </Link>
            <SocialButton likeUrl={likeUrl} />
          </div>
          <div className={classnames('navbar-collapse', { 'not-collapse': !this.state.isMenuHidden })}>
            <ul className="nav navbar-nav">
              <li className={classnames({'active': this.context.router.isActive({pathname: '/about'})})}>
                <Link to="/" onClick={this.onBarsClick.bind(this)}>
                  首頁
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={this.onBarsClick.bind(this)}>
                  關於
                </Link>
              </li>
            </ul>
            <div>
            </div>
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
