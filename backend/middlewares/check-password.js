const passwordSchema = require("../models/Password");

module.exports = (res, req, next) => {
  if (!passwordSchema.validate(req.body.password)) {
    res.status(400).json({
      message:
        "le mot de passe doit faire au minimum 8 caractères, avec une majuscule, une minuscule et un chiffre.",
    });
  } else {
    next();
  }
};
