const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");
const checkEmail = require("../middlewares/check-email");
const checkPassword = require("../middlewares/check-password");
//const multer = require("../middlewares/multer-config");

//-----------------------------------------------------------------------------------------------
//création d'un profil utilisateur.
router.post(
  "/signup",
  /*checkEmail,*/ /*checkPassword,*/ /*multer,*/
  userCtrl.signup
);

//connexion à un profil utilisateur.
router.post("/login", userCtrl.login);

//accès à la liste des utilisateurs.
router.get("/", userCtrl.getAllUsers);

//accès à un profil d'un utilisateur.
router.get("/:id", userCtrl.getOneUser);

//modification d'un profil utilisateur.
router.put("/:id", /*multer,*/ userCtrl.modifyUser);

//suppression d'un profil utilisateur.
router.delete("/:id", userCtrl.deleteUser);

//-----------------------------------------------------------------------------------------------
module.exports = router;
