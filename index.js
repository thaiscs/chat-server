const express = require("express");
const messageRouter = require("./messages/router");
const bodyParser = require("body-parser");
const parserMiddleware = bodyParser.json();

const app = express();
const port = 4000;

app.use(parserMiddleware);
app.use(messageRouter);

app.get("/", (req, resp) => {
  resp.send("hello");
});
app.listen(port, () => console.log(`Listening on port ${port}`));
