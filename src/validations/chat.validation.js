const { check } = require('express-validator');

// Common validation rules
const messageValidation = [
  check('message', 'Message cannot be empty').not().isEmpty(),
];

// Validation arrays
const chat = [...messageValidation];

module.exports = {
  chat,
};
