require('normalize.css');
require('../styles/App.scss');

import React from 'react';

import NavigationBar from '../components/NavigationBar';


class MainPage extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="container">
        </div>
      </div>
    );
  }
}

MainPage.defaultProps = {
};

export default MainPage;
