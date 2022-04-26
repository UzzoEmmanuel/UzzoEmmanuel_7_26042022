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
            description: req.body.description,
            picture: req.body.picture,
            email: hashedEmail,
            password: hash,
            role: req.body.role,
          },
        })
        .then(() => res.status(201).json({ message: "utilisateur créé" }))
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
            // userId: user.id,
            // token: jwt.sign({ userId: user.id }, process.env.SECRET_JWT_TOKEN, {
            //   expireIn: "24h",
            // }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
      console.log(user.id);
    })
    .catch((error) => res.status(500).json({ error }));
};

//-----------------------------------------------------------------------------------------------
//accès à la liste des utilisateurs.
exports.getAllUsers = (req, res, next) => {
  prisma.user
    .findMany()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json({ error: error }));
};

//-----------------------------------------------------------------------------------------------
//accès à un profil d'un utilisateur.
exports.getOneUser = (req, res, next) => {
  prisma.user
    .findUnique({ where: { id: req.params.id } })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({ error: error }));
  console.log(id);
};

//-----------------------------------------------------------------------------------------------
//modification d'un profil utilisateur.
exports.modifyUser = (req, res, next) => {
  if (req.file) {
    prisma.user
      .findUnique({ where: { id: req.params.id } })
      .then((image) => {
        const filename = image.picture.split("/images/")[1];
        fs.unlink(`images/${filename}`, (error) => {
          if (error) throw error;
        });
      })
      .catch((error) => res.status(404).json({ error: error }));
  }
  const userObject = req.file
    ? {
        ...JSON.parse(req.body.user),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  prisma.user
    .update(
      { id: req.params.id /*, userId: req.auth.user.id*/ },
      { ...userObject, id: req.params.id }
    )
    .then(() => res.status(200).json({ message: "profil modifié" }))
    .catch((error) => res.status(400).json({ error }));
};

//-----------------------------------------------------------------------------------------------
//suppression d'un profil utilisateur.
exports.deleteUser = (req, res, next) => {
  prisma.user
    .findUnique({ where: { id: req.params.id /*, userId: req.auth.userId*/ } })
    .then((user) => {
      const filename = user.picture.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        prisma.user
          .delete({ where: { id: req.params.id } })
          .then(() => res.status(200).json({ message: "profil supprimé" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};