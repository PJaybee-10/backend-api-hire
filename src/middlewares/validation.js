const { validationResult } = require('express-validator');
const { failed } = require('../helpers/response');
const { logError } = require('../helpers/logger');

// Error handling function
const handleError = (res, code, message, error) => {
  failed(res, { code, message, error });
};

module.exports = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    const extractedErrors = errors.array().map(err => err.msg);

    handleError(res, 422, 'Validation Failed', extractedErrors);
  } catch (error) {
    logError(error);
    handleError(res, 500, error.message, 'Internal Server Error');
  }
};
