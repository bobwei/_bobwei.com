import React from 'react';
import { connect } from 'react-redux';

import NavigationBar from '../components/NavigationBar';
import Pages from '../components/Pages';


class MainPage extends React.Component {

  render() {
    let coverPhoto;
    if (process.env.BROWSER) {
      coverPhoto = require('../images/bg.jpg');
    }
    return (
      <div>
        <NavigationBar />
        <div
          className="cover-photo center"
          style={{ backgroundImage: `url(${coverPhoto})` }}
        >
          <div className="gradient-content">
            <h1>
              Build Something Users Love !
            </h1>
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
