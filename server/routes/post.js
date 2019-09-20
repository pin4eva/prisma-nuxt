const { prisma } = require("../../generated/prisma-client");
const express = require("express");
const router = express.Router();

router.post("/new", async (req, res) => {
  const { title, desc, body, image, author } = req.body;

  await prisma
    .createPost({
      title,
      author: {
        connect: { id: author }
      },
      body,
      desc,
      image
    })
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
