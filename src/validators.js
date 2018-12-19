/* Contains a value */
export const required = value => (value ? undefined : 'Required');

/* The value is non-empty */
export const nonEmpty = value => value.trim() !== '' ? undefined : 'Cannot be empty';

/* The value is be exactly 5 characters long */
export const validChar = value => ( value.length > 5 ? undefined : 'Must be exactly 5 digits long');

/* Each character is a number */
//not sure if I should use numericality 
// https://www.npmjs.com/package/redux-form-validators
export const isNumber = value => ( value.isInteger() ? undefined : 'Must be exactly 5 digits long');
