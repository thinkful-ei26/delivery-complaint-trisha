import React, { Component } from 'react';
import './report-form.css';
import { reduxForm, Field } from 'redux-form';
import { required, nonEmpty, validInput } from '../validators';

import Input from './input';

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

          {/* <label htmlFor="trackingNumber">
            Tracking Number:
          </label> */}
          <Field 
            name="trackingNumber" 
            type="text"
            component={Input}
            label="Tracking Number:"
            id="trackingNumber" 
            validate={[required, nonEmpty, validInput]}
          />

          {/* <label htmlFor="issue">
            What is your issue?
          </label> */}
          <Field 
            name="issue"
            component={Input} 
            id="issue"
            label="What is your issue?"
            validate={[required, nonEmpty]}
          >
            <option value="not-delivered">My delivery hasn't arrived</option>
            <option value="wrong-item">The wrong item was delivered</option>
            <option value="missing-part">Part of my order was missing</option>
            <option value="damanged">Some of my order was missing</option>
            <option value="other">Other (give details belwo)</option>
          </Field>

          {/* <label htmlFor="details">
          Give more details (optional)
          </label> */}
          <Field 
            name="details" 
            type="textarea"
            id="details" 
            component={Input}
            label="Give more details (optional)"
          />
          {/* disable button if user hasn't touched form */ }
          <button 
            type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'report',
})(ReportForm);
