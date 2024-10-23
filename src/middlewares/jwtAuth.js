const jwt = require('jsonwebtoken');
const { failed } = require('../helpers/response');
const { JWT_SECRET } = require('../helpers/env');
const { logError } = require('../helpers/logger');

const handleError = (res, code, message, error) => {
  failed(res, { code, message, error });
};

module.exports = (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return handleError(res, 403, 'Please login first', 'Forbidden');
    }

    token = token.split(' ')[1];

    const decoded = jwt.verify(token, JWT_SECRET);
    req.APP_DATA = { tokenDecoded: decoded };
    next();
  } catch (error) {
    logError(error);
    handleError(res, 401, 'Invalid token', 'Unauthorized');
  }
};
