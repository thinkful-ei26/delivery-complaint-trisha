import React, { Component } from 'react';
import '../index.css';

export default class Input extends Component {

  //React lifecycle added to help with focus
  componentDidUpdate(prevProps){
    if(!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }

  render() {
    //dynamically set the Element component, default to input if not found
    const Element = this.props.element || 'input';

    let error;
    if (this.props.meta.touched && this.props.meta.error) { //only show error feedback on form if the user touches the inputs
      error = <div className="form-error">
      {this.props.meta.error}
      </div>;
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = (
        <div className="form-warning">
          {this.props.meta.warning}
        </div>
      )
    }

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
          value={this.props.input.value}
        >
          {this.props.children}
        </Element>
      </div>
    )
  }
}