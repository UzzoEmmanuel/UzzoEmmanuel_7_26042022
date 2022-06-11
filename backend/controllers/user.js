const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const cryptojs = require("crypto-js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
require("dotenv").config();

//-----------------------------------------------------------------------------------------------
//création d'un profil utilisateur.
exports.signup = (req, res, next) => {
  const hashedEmail = cryptojs
    .HmacSHA512(req.body.email, process.env.SECRET_CRYPTOJS_TOKEN)
    .toString(cryptojs.enc.Base64);
  bcrypt
    .hash(req.body.password, 10)
    .then(async (hash) => {
      await prisma.user
        .create({
          data: {
            username: req.body.username,
            email: hashedEmail,
            password: hash,
            role: req.body.role,
          },
        })
        .then(() =>
          res.status(201).json({
            message: "utilisateur créé",
            token: jwt.sign({}, process.env.SECRET_JWT_TOKEN),
          })
        )
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

//-----------------------------------------------------------------------------------------------
//connexion à un profil utilisateur.
exports.login = (req, res, next) => {
  const hashedEmail = cryptojs
    .HmacSHA512(req.body.email, process.env.SECRET_CRYPTOJS_TOKEN)
    .toString(cryptojs.enc.Base64);
  prisma.user
    .findUnique({ where: { email: hashedEmail } })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "utilisateur non trouvé" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "mot de passe incorrect" });
          }
          res.status(200).json({
            message: "utilsateur vérifié",
            userId: user.id,
            role: user.role,
            token: jwt.sign({ userId: user.id }, process.env.SECRET_JWT_TOKEN),
          });
        })
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

//-----------------------------------------------------------------------------------------------
//accès à la liste des utilisateurs.
exports.getUsers = (req, res, next) => {
  prisma.user
    .findMany()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json({ error: error }));
};

//-----------------------------------------------------------------------------------------------
//accès à un profil d'un utilisateur.
exports.getUser = (req, res, next) => {
  prisma.user
    .findUnique({ where: { id: +req.params.id } })
    .then((user) => res.status(200).json(user))
    .catch((error) =>
      res.status(404).json({ error: "utilisateur non trouvé" })
    );
};

//-----------------------------------------------------------------------------------------------
//accès au profil utilisateur pour authentification côté frontend.
exports.getMe = (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1];
  if (!token)
    return res
      .status(401)
      .send({ auth: false, message: "aucun token n'est trouvé" });

  jwt.verify(token, process.env.SECRET_JWT_TOKEN, function (err) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "token non authentifié" });
    prisma.user
      .findUnique({ where: { id: req.auth.userId } })
      .then((user) => res.status(200).json(user))
      .catch((error) =>
        res.status(404).json({ error: "utilisateur non trouvé" })
      );
  });
};

//-----------------------------------------------------------------------------------------------
//modification d'un profil utilisateur.
exports.updateUser = (req, res, next) => {
  try {
    if (+req.params.id === req.auth.userId)
      prisma.user
        .update({
          where: { id: +req.params.id },
          data: {
            username: req.body.username,
            description: req.body.description,
            role: req.body.role,
          },
        })
        .then(() => res.status(200).json({ message: "profil modifié" }))
        .catch((error) => res.status(400).json({ error }));
    else {
      res.status(401).json({ error: "requête non authentifiée" });
    }
  } catch {
    res.status(500).json({ error });
  }
};

//-----------------------------------------------------------------------------------------------
//modification de la photo de profil utilisateur.
exports.updateUserPicture = (req, res, next) => {
  try {
    if (+req.params.id === req.auth.userId)
      prisma.user
        .update({
          where: { id: +req.params.id },
          data: {
            picture: `${req.protocol}://${req.get("host")}/images/${
              req.file.filename
            }`,
          },
        })
        .then(() => res.status(200).json({ message: "profil modifié" }))
        .catch((error) => res.status(400).json({ error }));
    else {
      res.status(401).json({ error: "requête non authentifiée" });
    }
  } catch {
    res.status(500).json({ error });
  }
};

//-----------------------------------------------------------------------------------------------
//suppression d'un profil utilisateur.
exports.deleteUser = (req, res, next) => {
  try {
    if (+req.params.id === req.auth.userId)
      fs.unlink(`images/${filename}`, () => {
        prisma.user
          .delete({
            where: { id: +req.params.id },
          })
          .then(() => res.status(200).json({ message: "profil supprimé" }))
          .catch((error) => res.status(400).json({ error }));
      });
    else {
      res.status(401).json({ error: "requête non authentifiée" });
    }
  } catch {
    res.status(500).json({ error });
  }
};
