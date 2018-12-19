import React, { Component } from 'react';
import './report-form.css';

class ReportForm extends Component {
  render() {
    return (
      <div className="report">
        <header className="report-header">
         <h2> Report a problem with your delivery</h2>
        </header>
        <form>

          <label for="trackingNumber">
            Tracking Number:
          </label>
          <input 
            name="trackingNumber" 
            id="trackingNumber" 
            type="text"
          />

          <label for="issue">
            What is your issue?
          </label>
          <select name="issue" id="issue">
            <option value="not-delivered">My delivery hasn't arrived</option>
            <option value="wrong-item">The wrong item was delivered</option>
            <option value="missing-part">Part of my order was missing</option>
            <option value="damanged">Some of my order was missing</option>
            <option value="other">Other (give details belwo)</option>
          </select>

          <label for="details">
          Give more details (optional)
          </label>
          <input 
            name="details" 
            id="details" 
            type="textarea"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ReportForm;
