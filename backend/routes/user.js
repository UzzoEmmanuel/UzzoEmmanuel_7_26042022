const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");
const checkEmail = require("../middlewares/check-email");
const checkPassword = require("../middlewares/check-password");
//const multer = require("../middlewares/multer-config");

router.post(
  "/signup",
  /*checkEmail,*/ /*checkPassword,*/ /*multer,*/
  userCtrl.signup
);
router.post("/login", userCtrl.login);

module.exports = router;
