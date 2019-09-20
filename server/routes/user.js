const { prisma } = require("../../generated/prisma-client");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  await prisma
    .users()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
