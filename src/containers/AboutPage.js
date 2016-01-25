import React from 'react';
import { connect } from 'react-redux';

import NavigationBar from '../components/NavigationBar';


class AboutPage extends React.Component {
  render() {
    let coverPhoto;
    let profilePicture;
    if (process.env.BROWSER) {
      coverPhoto = require('../images/cover-photo2.jpg');
      profilePicture = require('../images/profile-picture.jpg');
    }
    return (
      <div>
        <NavigationBar />
        <div
          className="cover-photo center direction-column"
          style={{
            backgroundImage: `url(${coverPhoto})`,
            height: '100vh'
          }}
        >
          <div className="profile gradient-content">
            <img
              className="profile-picture"
              src={profilePicture}
            />
            <h1 className="profile-name">
              Bob Wei ( 韋伯俞 )
            </h1>
            <div className="subtitle-info">
              Linkwish, Inc. 共同創辦人、創業家與程式設計師
            </div>
          </div>
          <div className="gradient" />
        </div>
      </div>
    );
  }
}

export default connect(() => {
  return {};
})(AboutPage);
