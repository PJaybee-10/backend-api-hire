const { check } = require('express-validator');

// Common validation rules
const positionValidation = [
  check('position', 'Position cannot be empty').not().isEmpty(),
  check('position', 'Position only letter allowed').matches(/^[A-Za-z ]+$/),
  check('position', 'Position minimum 3 characters').isLength({ min: 3 }),
];

const companyValidation = [
  check('company', 'Company cannot be empty').not().isEmpty(),
  check('company', 'Company minimum 3 characters').isLength({ min: 3 }),
];

const descriptionValidation = [
  check('description', 'Description cannot be empty').not().isEmpty(),
  check('description', 'Description minimum 3 characters').isLength({ min: 3 }),
];

// Validation arrays
const experience = [
  ...positionValidation,
  ...companyValidation,
  ...descriptionValidation,
];

module.exports = {
  experience,
};
