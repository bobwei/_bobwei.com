import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

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
      });
  }

  render() {
    let coverPhoto;
    if (process.env.BROWSER) {
      coverPhoto = require('../images/bg2.jpg');
    }
    let { handleSubmit, fields } = this.props;
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
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                  <div className="form-group">
                    <label>
                      稱呼
                      {fields.name.touched && fields.name.error && <span className='has-error'>{fields.name.error}</span>}
                    </label>
                    <input
                      type="text"
                      className="form-control visible-lg"
                      placeholder="如何稱呼您？"
                      autoFocus
                      {...fields.name}
                    />
                    <input
                      type="text"
                      className="form-control visible-xs visible-sm visible-md"
                      placeholder="如何稱呼您？"
                      {...fields.name}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Email
                      {fields.email.touched && fields.email.error && <span className='has-error'>{fields.email.error}</span>}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      {...fields.email}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Message
                      {fields.message.touched && fields.message.error && <span className='has-error'>{fields.message.error}</span>}
                    </label>
                    <textarea
                      className="form-control"
                      placeholder="留言"
                      rows="5"
                      {...fields.message}
                    />
                  </div>
                  <div className="form-group" style={{ textAlign: 'center' }}>
                    <button className="btn btn-default btn-color btn-green" type="submit">
                      {(this.state.isSaving) ? '儲存中...': '送出'}
                    </button>
                  </div>
                </form>
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

const fields = [ 'name', 'email', 'message' ];
let reduxComponent = connect((state) => {
  return state;
})(ContactPage);
export default reduxForm(
  {
    form: 'contact',
    fields,
    validate(data) {
      const errors = {};
      fields.forEach((field) => {
        if (!data[field]) {
          errors[field] = '必填';
        }
      });
      return errors;
    }
  }
)(reduxComponent);
