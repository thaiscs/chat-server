const express = require("express");
const { Router } = express;
const router = new Router();
const Message = require("./model");

router.get("/messages", (req, res, next) => {
  Message.findAll()
    .then(messages => {
      res.send(messages);
    })
    .catch(next);
});

module.exports = router;
