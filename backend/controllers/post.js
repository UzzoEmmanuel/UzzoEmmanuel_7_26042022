const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//-----------------------------------------------------------------------------------------------
//création d'un post.
exports.createPost = (req, res, next) => {
  prisma.post
    .create({
      data: {
        title: req.body.title,
        content: req.body.content,
        authorId: req.auth.userId,
      },
    })
    .then(() => res.status(201).json({ message: "post créé" }))
    .catch((error) => res.status(400).json({ error }));
};

//-----------------------------------------------------------------------------------------------
//accès à tous les posts.
exports.getPosts = (req, res, next) => {
  prisma.post
    .findMany()
    .then((posts) => res.status(200).json(posts))
    .catch((error) => res.status(400).json({ error: error }));
};

//-----------------------------------------------------------------------------------------------
//accès à un post.
exports.getPost = (req, res, next) => {
  prisma.post
    .findUnique({ where: { id: +req.params.id } })
    .then((post) => res.status(200).json(post, { message: "post trouvé" }))
    .catch(() => res.status(400).json({ error: "post non trouvé" }));
};

//-----------------------------------------------------------------------------------------------
//modification d'un post.
exports.updatePost = (req, res, next) => {
  prisma.post
    .findUnique({ where: { id: +req.params.id } })
    .then((post) => {
      if (post.authorId === req.auth.userId)
        prisma.post
          .update({
            where: { id: +req.params.id },
            data: {
              title: req.body.title,
              content: req.body.content,
            },
          })
          .then((post) => {
            res.status(200).json({ post, message: "post modifié" });
          })
          .catch((error) => res.status(400).json({ error }));
      else {
        res.status(401).json({ error: "requête non authentifiée" });
      }
    })
    .catch(() => res.status(400).json({ error: "post non trouvé" }));
};

//-----------------------------------------------------------------------------------------------
//suppression d'un post.
exports.deletePost = (req, res, next) => {
  prisma.post
    .findUnique({ where: { id: +req.params.id } })
    .then((post) => {
      if (post.authorId === req.auth.userId)
        prisma.post
          .delete({
            where: { id: +req.params.id },
          })
          .then((post) => {
            res.status(200).json({ post, message: "post supprimé" });
          })
          .catch((error) => res.status(400).json({ error }));
      else {
        res.status(401).json({ error: "requête non authentifiée" });
      }
    })
    .catch(() => res.status(400).json({ error: "post non trouvé" }));
};
