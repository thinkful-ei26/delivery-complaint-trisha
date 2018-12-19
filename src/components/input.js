import React, { Component } from 'react';
import '../index.css';

export default class Input extends Component {

  //add componentDidUpdate later


  render() {
    //dynamically set the Element component, default to input if not found
    const Element = this.props.element || 'input';

    //only show error feedback on form if the user touches the inputs
    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className="form-error">
      {this.props.meta.error}
      </div>;
    }

    let warning;
    //props below is coming from redux form
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = (
        <div className="form-warning">
          {this.props.meta.warning}
        </div>
      )
    }

    //return JSX dynamically changing error/warning feedback. 
    // You're moving the labels & the Element component here too
    return (
      <div className="form-input">
        <label htmlFor={this.props.input.name}>
          {this.props.label}
          {error}
          {warning}
        </label>
        <Element 
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          ref={ input => (this.input = input )}
        />
      </div>
    )
  }
}