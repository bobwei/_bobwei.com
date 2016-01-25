import React from 'react';

import { connect } from 'react-redux';


class MainPage extends React.Component {
  render() {
    return (
      <div>
        <div className="cover-photo">
          <div className="user">
            <div className="picture">
            </div>
            <h1 className="name">
              Bob Wei
            </h1>
            <a className="link"
              href="https://facebook.com/coolyu"
              target="_blank">
              Facebook
            </a>
          </div>
          <div className="gradient">
          </div>
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
