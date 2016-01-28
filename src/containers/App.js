import React from 'react';

import { connect } from 'react-redux';
import NavigationBar from '../components/NavigationBar';
import MainPage from '../containers/MainPage';


class App extends React.Component {

  render() {
    return (
      <div>
        <NavigationBar />
        {this.props.main || <MainPage />}
      </div>
    );
  }
}

App.defaultProps = {
};

export default connect((state) => {
  return state;
})(App);
