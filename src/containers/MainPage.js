import React from 'react';
import { connect } from 'react-redux';

import NavigationBar from '../components/NavigationBar';


class MainPage extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="cover-photo">
          <h1>
            Build Something Users Love !
          </h1>
        </div>
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
