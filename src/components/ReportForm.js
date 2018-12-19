import React, { Component } from 'react';
import './report-form.css';

import { reduxForm, Field } from 'redux-form';

export class ReportForm extends Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div className="report">
        <header className="report-header">
         <h2> Report a problem with your delivery</h2>
        </header>

        <form
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values) )}
        >

          <label for="trackingNumber">
            Tracking Number:
          </label>
          <Field 
            name="trackingNumber" 
            type="text"
            component='input'
            label="Tracking Number:"
            id="trackingNumber" 
          />

          <label for="issue">
            What is your issue?
          </label>
          <Field 
            name="issue"
            component='select' 
            id="issue"
            label="What is your issue?"
          >
            <option value="not-delivered">My delivery hasn't arrived</option>
            <option value="wrong-item">The wrong item was delivered</option>
            <option value="missing-part">Part of my order was missing</option>
            <option value="damanged">Some of my order was missing</option>
            <option value="other">Other (give details belwo)</option>
          </Field>

          <label for="details">
          Give more details (optional)
          </label>
          <Field 
            name="details" 
            type="textarea"
            id="details" 
            component='input'
            label="Give more details (optional)"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'report',
})(ReportForm);
