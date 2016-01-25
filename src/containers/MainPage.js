import React from 'react';
import { connect } from 'react-redux';


class MainPage extends React.Component {
  render() {
    return (
      <div>
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
