/* global ga */
import React from 'react';
import { connect } from 'react-redux';

import NavigationBar from '../components/NavigationBar';


class AboutPage extends React.Component {

  onLinkClick(info) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Click',
      eventAction: `${info}`
    });
  }

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
            <div className="subtitle-info">
              <a
                href="https://fb.me/coolyu"
                className="btn btn-transparent btn-lg"
                target="_blank"
                onClick={this.onLinkClick.bind(this, 'My Facebook')}
              >
                My Facebook
              </a>
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
