const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");
const checkEmail = require("../middlewares/check-email");
const checkPassword = require("../middlewares/check-password");
const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer-config");

//-----------------------------------------------------------------------------------------------
//création d'un profil utilisateur.
router.post("/signup", checkEmail, checkPassword, multer, userCtrl.signup);

//connexion à un profil utilisateur.
router.post("/login", userCtrl.login);

//accès à la liste des utilisateurs.
router.get("/users", auth, userCtrl.getUsers);

//accès à un profil d'un utilisateur.
router.get("/user/:id", auth, userCtrl.getUser);

//modification d'un profil utilisateur.
router.put("/user/:id", auth, multer, userCtrl.updateUser);

//suppression d'un profil utilisateur.
router.delete("/user/:id", auth, userCtrl.deleteUser);

//-----------------------------------------------------------------------------------------------
module.exports = router;
