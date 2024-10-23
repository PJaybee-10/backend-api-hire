const { getUserByEmail } = require('../models/auth.model');
const { failed } = require('../helpers/response');
const { logError } = require('../helpers/logger');

const ROLES = {
  WORKER: 0,
  RECRUITER: 1,
};

const handleError = (res, code, message, error) => {
  failed(res, { code, message, error });
};

module.exports = {
  isVerified: async (req, res, next) => {
    try {
      const user = await getUserByEmail(req.body.email);

      if (!user.rowCount) {
        next();
      } else if (user.rows[0].is_verified) {
        next();
      } else {
        handleError(res, 401, 'Your email is not verified yet', 'Unauthorized');
      }
    } catch (error) {
      logError(error);
      handleError(res, 500, error.message, 'Internal Server Error');
    }
  },
  isWorker: (req, res, next) => {
    if (req.APP_DATA.tokenDecoded.role === ROLES.WORKER) {
      next();
    } else {
      handleError(res, 403, "You don't have permission!", 'Forbidden');
    }
  },
  isRecruiter: (req, res, next) => {
    if (req.APP_DATA.tokenDecoded.role === ROLES.RECRUITER) {
      next();
    } else {
      handleError(res, 403, "You don't have permission!", 'Forbidden');
    }
  },
};
