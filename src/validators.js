/* Contains a value */
export const required = value => (value ? undefined : 'Required');

/* The value is non-empty */
export const nonEmpty = value => value.trim() !== '' ? undefined : 'Cannot be empty';

/* The value is be exactly 5 characters long */
/* Each character is a number */
export const validInput = value => ( /^\d{5}$/.test(value) ? undefined : 'Must contain exactly 5 digits only');