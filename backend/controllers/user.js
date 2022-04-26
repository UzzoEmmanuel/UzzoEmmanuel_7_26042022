const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const cryptojs = require("crypto-js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//-----------------------------------------------------------------------------------------------
//création d'un compte. => à mettre à jour avec les méthode prisma!
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

//connexion à un compte.
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
        .catch((error) => res.status(500).json({ error: "c'est là" }));
      console.log(user.id);
      console.log(user._id);
    })
    .catch((error) => res.status(500).json({ error: "c'est là là" }));
};

//-----------------------------------------------------------------------------------------------
//trouver la liste complête des utilisateurs.

//trouver un utilisateur.

//modification d'un profil utilisateur.

//suppression d'un profil utilisateur.
