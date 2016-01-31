import React from 'react';
import { reduxForm } from 'redux-form';

class ContactForm extends React.Component {
  render() {
    const { fields, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>稱呼</label>
          <input className="form-control" type="text" placeholder="如何稱呼您" {...fields.name} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input className="form-control" type="email" placeholder="Email" {...fields.email} />
        </div>
        <div className="form-group">
          <label>留言</label>
          <textarea className="form-control" type="text" placeholder="留言" {...fields.message} rows="5" />
        </div>
        <div className="form-group" style={{ textAlign: 'center' }}>
          <button className="btn btn-default btn-color btn-green" type="submit">
            送出
          </button>
        </div>
      </form>
    );
  }
}

ContactForm = reduxForm({
  form: 'contact',
  fields: ['name', 'email', 'message']
})(ContactForm);

export default ContactForm;
