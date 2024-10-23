const { check } = require('express-validator');

// Common validation rules
const nameValidation = [
  check('name', 'Name cannot be empty').not().isEmpty(),
  check('name', 'Name only letter allowed').matches(/^[A-Za-z ]+$/),
  check('name', 'Name must be between 3 and 50 characters').isLength({ min: 3, max: 50 }),
];

const emailValidation = [
  check('email', 'Email cannot be empty').not().isEmpty(),
  check('email', 'Please enter email correctly').isEmail(),
  check('email', 'Email maximum length is 50 characters').isLength({ max: 50 }),
];

const phoneNumberValidation = [
  check('phoneNumber', 'Phone Number cannot be empty').not().isEmpty(),
  check('phoneNumber', 'Phone Number only number allowed').isNumeric(),
  check('phoneNumber', 'Phone Number must be between 11 and 13 characters').isLength({ min: 11, max: 13 }),
];

const passwordValidation = [
  check('password', 'Password cannot be empty').not().isEmpty(),
  check('password', 'Password require 8 or more characters').isLength({ min: 8 }),
  check('password', 'Password must include one lowercase character, one uppercase character, a number, and a special character.')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, 'i'),
];

const passwordConfirmationValidation = [
  check('passwordConfirmation', 'Password confirmation cannot be empty').not().isEmpty(),
  check('passwordConfirmation').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match password');
    }
    return true;
  }),
];

const urlValidation = (field) => [
  check(field, `${field.charAt(0).toUpperCase() + field.slice(1)} cannot be empty`).not().isEmpty(),
  check(field, `${field.charAt(0).toUpperCase() + field.slice(1)} only URL allowed`).isURL(),
];

// Validation arrays
const update = [
  check('company', 'Company Name cannot be empty').not().isEmpty(),
  check('company', 'Company Name minimum 3 characters').isLength({ min: 3 }),
  check('companyField', 'Company Field cannot be empty').not().isEmpty(),
  check('companyField', 'Company Field minimum 3 characters').isLength({ min: 3 }),
  check('city', 'City cannot be empty').not().isEmpty(),
  check('city', 'City minimum 3 characters').isLength({ min: 3 }),
  check('description', 'Description cannot be empty').not().isEmpty(),
  check('description', 'Description minimum 3 characters').isLength({ min: 3 }),
  ...emailValidation,
  ...urlValidation('instagram'),
  ...phoneNumberValidation,
  ...urlValidation('linkedin'),
];

const password = [
  ...passwordValidation,
  ...passwordConfirmationValidation,
];

const hire = [
  check('messageDestination', 'Message Destination cannot be empty').not().isEmpty(),
  ...nameValidation,
  ...emailValidation,
  ...phoneNumberValidation,
  check('description', 'Description cannot be empty').not().isEmpty(),
  check('description', 'Description minimum 3 characters').isLength({ min: 3 }),
];

module.exports = {
  update,
  password,
  hire,
};
