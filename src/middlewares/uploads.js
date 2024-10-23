const path = require('path');
const multer = require('multer');
const crypto = require('crypto');
const { failed } = require('../helpers/response');
const { logError } = require('../helpers/logger');

// Constants
const MAX_SIZE = 2 * 1024 * 1024;
const ALLOWED_MIME_TYPES = ['image/png', 'image/jpg', 'image/jpeg'];

// Error handling function
const handleError = (res, code, message, error) => {
  failed(res, { code, message, error });
};

// Multer configuration
const multerUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public');
    },
    filename: (req, file, cb) => {
      const name = crypto.randomBytes(30).toString('hex');
      const ext = path.extname(file.originalname);
      cb(null, `${name}${ext}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb({ message: 'Image extension only can be .jpg, .jpeg, and .png' }, false);
    }
  },
  limits: { fileSize: MAX_SIZE },
});

// Middleware
const upload = (req, res, next) => {
  const multerSingle = multerUpload.single('image');
  multerSingle(req, res, (err) => {
    if (err) {
      let errorMessage = err.message;
      if (err.code === 'LIMIT_FILE_SIZE') {
        errorMessage = `File ${err.field} too large, max 2MB`;
      }

      logError(err);
      handleError(res, 400, errorMessage, 'Upload File Error');
    } else {
      next();
    }
  });
};

module.exports = upload;
