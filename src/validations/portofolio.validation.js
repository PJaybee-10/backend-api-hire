const { check } = require('express-validator');

// Common validation rules
const appNameValidation = [
  check('app_name', 'App Name cannot be empty').not().isEmpty(),
  check('app_name', 'App Name minimum 3 characters').isLength({ min: 3 }),
];

const linkRepositoryValidation = [
  check('link_repository', 'Link Repository cannot be empty').not().isEmpty(),
];

const typePortofolioValidation = [
  check('type_portofolio', 'Type Portofolio cannot be empty').not().isEmpty(),
  check('type_portofolio', 'Type Portofolio only number allowed').isNumeric(),
  check('type_portofolio', 'Type Portofolio value must be between 0 to 1').isInt({ min: 0, max: 1 }),
];

// Validation arrays
const portofolio = [
  ...appNameValidation,
  ...linkRepositoryValidation,
  ...typePortofolioValidation,
];

module.exports = {
  portofolio,
};
