import React from 'react';
import { connect } from 'react-redux';

import ContactForm from '../components/ContactForm';
import { createContact } from '../actions/contact';


class ContactPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isSaving: false,
      isComplete: false
    };
  }

  onSubmit(data) {
    this.setState({ isSaving: true });
    this.props
      .dispatch(createContact(data))
      .then(() => {
        alert('感謝您的來信，將儘速與您聯繫，謝謝。:)');
        window.location.reload();
        // this.setState({ isSaving: false, isComplete: true });
        // this.props.dispatch({ type: 'redux-form/RESET', form: 'contact' });
      });
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
                  ref="contactForm"
                  onSubmit={this.onSubmit.bind(this)}
                  isSaving={this.state.isSaving}
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
