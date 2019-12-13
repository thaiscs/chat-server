const express = require("express");
const { Router } = express;
const router = new Router();
const Message = require("./model");

router.get("/messages", async (req, res, next) => {
  try {
    const messages = await Message.findAll();
    res.send(messages);
  } catch (error) {
    next(error);
  }
});

router.post("/messages", async (req, res, next) => {
  try {
    const message = await Message.create(req.body);
    res.send(message);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
