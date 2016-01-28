import React from 'react';
import { connect } from 'react-redux';
import jQuery from 'jquery';

import Pages from '../components/Pages';

if (process.env.BROWSER) {
  require('../styles/MainPage.scss');
}

class MainPage extends React.Component {

  onProductsLinkClick() {
    let coverPhotoHeight = jQuery('.cover-photo').height();
    jQuery('html, body').animate({
      scrollTop: coverPhotoHeight - 100
    }, 450);
  }

  render() {
    let coverPhoto;
    if (process.env.BROWSER) {
      coverPhoto = require('../images/bg.jpg');
    }
    return (
      <div>
        <div
          className="cover-photo center background-shift"
          style={{
            backgroundImage: `url(${coverPhoto})`,
            position: 'relative'
          }}
        >
          <div className="gradient-content">
            <h1>
              Build Something Users Love !
            </h1>
          </div>
          <div className="products-link" onClick={this.onProductsLinkClick.bind(this)}>
            <h2>
              案例作品
            </h2>
            <i className="fa fa-chevron-down" />
          </div>
          <div className="gradient" />
        </div>
        <Pages />
      </div>
    );
  }
}

MainPage.defaultProps = {
};

export default connect((state) => {
  return {
    routing: state.routing
  };
})(MainPage);
