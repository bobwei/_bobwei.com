import React from 'react';
import { connect } from 'react-redux';

import NavigationBar from '../components/NavigationBar';
import Pages from '../components/Pages';


class MainPage extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="cover-photo center">
          <h1>
            Build Something Users Love !
          </h1>
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
