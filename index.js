const express = require("express");
const messageRouterFactory = require("./messages/router");
const bodyParser = require("body-parser");
const parserMiddleware = bodyParser.json();
const Sse = require("json-sse");
const stream = new Sse();
const messageRouter = messageRouterFactory(stream);
const Message = require("./messages/model");

const app = express();
const port = 4000;

app.use(parserMiddleware);
app.use(messageRouter);

app.get("/", (req, resp) => {
  stream.send("Hello from stream");
  resp.send("hello");
});

app.get("/stream", async (req, res, next) => {
  try {
    const messages = await Message.findAll(); // get array
    const string = JSON.stringify(messages); // convert array into string "serialize" into series of carachters
    stream.updateInit(string); // prepare string to be sent to the client right after they connect
    stream.init(req, res); // connect the user to the stream
  } catch (error) {
    next(error);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
