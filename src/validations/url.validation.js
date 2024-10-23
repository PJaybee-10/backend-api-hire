const validUrl = require('valid-url');
const { failed } = require('../helpers/response');
const { logError } = require('../helpers/logger');

// URL validation function
const validateUrl = (url, fieldName, errors) => {
  if (url && !validUrl.isUri(url)) {
    errors.push(`${fieldName} url is not valid`);
  }
};

module.exports = (req, res, next) => {
  try {
    const extractedErrors = [];

    validateUrl(req.body.link_repository, 'Link Repository', extractedErrors);
    validateUrl(req.body.instagram, 'Instagram', extractedErrors);
    validateUrl(req.body.linkedin, 'Linkedin', extractedErrors);
    validateUrl(req.body.github, 'Github', extractedErrors);
    validateUrl(req.body.gitlab, 'Gitlab', extractedErrors);

    if (extractedErrors.length) {
      return failed(res, {
        code: 422,
        message: 'Validation Failed',
        error: extractedErrors,
      });
    }

    next();
  } catch (error) {
    logError(error);
    return failed(res, {
      code: 500,
      message: error.message,
      error: 'Internal Server Error',
    });
  }
};
