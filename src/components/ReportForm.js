import React, { Component } from 'react';
import './report-form.css';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { required, nonEmpty, validInput } from '../validators';
import Input from './input';

const BASE_URL = 'https://us-central1-delivery-form-api.cloudfunctions.net';

export class ReportForm extends Component {
  onSubmit(values) {
    // console.log(values);

    //1) make a fetch request and pass values into the form as req.body
    return fetch(`${BASE_URL}/api/report`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => { //2) deal with the response
        if (!res.ok) {
          if (
            res.headers.has('content-type') && res.headers
              .get('content-type')
              .startsWith('application/json')
          ) {
            return res.json().then(err => Promise.reject(err));
          }
          return Promise.reject({
            code: res.status,
            message: res.statusText
          })
        }
        return;
      })
      .then( () => console.log('Submitted with values', values))
      .catch( err => {
        const { reason, message, location } = err;
        if (reason === 'ValidationError') {
          return Promise.reject(
            new SubmissionError({
              [location]: message
            })
          )
        }
        return Promise.reject(
          new SubmissionError({
            _error: 'Error submitting report'
          })
        )
      })
  }

  render() {
    let successMessage;
      if (this.props.submitSucceeded) {
        successMessage = (
          <div className="message message-success">
              Message submitted successfully
          </div>
        );
      }

      let errorMessage;
      if (this.props.error) {
          errorMessage = (
              <div className="message message-error">{this.props.error}</div>
          );
      }
    return (
      <div className="report">
        <header className="report-header">
         <h2> Report a problem with your delivery</h2>
        </header>

        <form
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values) )}
        >
        {successMessage}
        {errorMessage}
          <Field 
            element="input"
            name="trackingNumber" 
            type="text"
            component={Input}
            label="Tracking Number:"
            id="trackingNumber" 
            validate={[required, nonEmpty, validInput]}
          />

          <Field 
            element="select"
            name="issue"
            component={Input}
            id="issue"
            label="What is your issue?"
            validate={[required, nonEmpty]}
          >
            <option>Select Reason:</option>
            <option value="not-delivered">My delivery hasn't arrived</option>
            <option value="wrong-item">The wrong item was delivered</option>
            <option value="missing-part">Part of my order was missing</option>
            <option value="damanged">Some of my order was missing</option>
            <option value="other">Other (give details belwo)</option>
          </Field>

          <Field 
            element="textarea"
            name="details" 
            type="textarea"
            id="details" 
            component={Input}
            label="Give more details (optional)"
          />
          {/* disable button if user hasn't touched form */ }
          <button 
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
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
