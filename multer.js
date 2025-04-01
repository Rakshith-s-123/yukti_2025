const multer = require("multer");

const mstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/Images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: mstorage });

module.exports = upload;
