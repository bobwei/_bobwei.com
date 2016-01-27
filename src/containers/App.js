import React from 'react';

import { connect } from 'react-redux';
import NavigationBar from '../components/NavigationBar';
import MainPage from '../containers/MainPage';


class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isMenuHidden: false
    };
  }

  onMenuBarClick() {
    this.setState({
      isMenuHidden: !this.state.isMenuHidden
    });
  }

  render() {
    return (
      <div>
        <NavigationBar
          onMenuBarClick={this.onMenuBarClick.bind(this)}
        />
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
