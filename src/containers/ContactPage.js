import React from 'react';
import { connect } from 'react-redux';

import ContactForm from '../components/ContactForm';


class ContactPage extends React.Component {

  onSubmit(data) {
    console.log(data);
  }

  render() {
    let coverPhoto;
    if (process.env.BROWSER) {
      coverPhoto = require('../images/bg2.jpg');
    }
    return (
      <div className="contact-page">
        <div
          className="cover-photo center"
          style={{
            backgroundImage: `url(${coverPhoto})`,
            position: 'relative'
          }}
        >
          <div className="gradient-content">
            <div className="container">
              <div className="col-md-offset-3 col-md-6">
                <h2>
                  聯絡我
                </h2>
                <ContactForm
                  onSubmit={this.onSubmit.bind(this)}
                />
              </div>
            </div>
          </div>
          <div className="gradient" />
        </div>
      </div>
    );
  }
}

ContactPage.defaultProps = {
};

export default connect((state) => {
  return state;
})(ContactPage);
