const express = require("express");
const messageRouter = require("./messages/router");

const app = express();
const port = 4000;

app.use(messageRouter);
app.get("/", (req, resp) => {
  resp.send("hello");
});
app.listen(port, () => console.log(`Listening on port ${port}`));
