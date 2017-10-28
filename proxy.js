const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);
app.use(cors());
app.options("*", cors());

app.post("/shorten", cors(), (req, res, next) => {
  fetch("https://impraise-shorty.herokuapp.com/shorten", {
    method: "post",
    body: JSON.stringify({
      url: req.body.url
    })
  }).then(data => res.send(data));
});

app.listen(80, () => {
  console.log("CORS-enabled web server listening on port 80");
});
