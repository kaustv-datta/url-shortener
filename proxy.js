const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");

const API_URL = "https://impraise-shorty.herokuapp.com/";
const TARGET_PORT = 80;

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
app.options("*", cors());

app.post("/shorten", cors(), (req, res, next) => {
  fetch(API_URL + "shorten", {
    method: "post",
    body: JSON.stringify({
      url: req.body.url
    })
  })
    .then(res => res.json())
    .then(json =>
      res.send(
        Object.assign({}, json, { api: API_URL, long_url: req.body.url })
      )
    );
});

const server = app.listen(TARGET_PORT, () => {
  console.log("CORS-enabled web server listening on port " + TARGET_PORT);
});

const io = require("socket.io").listen(server);

io.on("connection", function(socket) {
  socket.on("url_stats", data => {
    pingShortcodeStats(data.payload, socket);
  });
});

const pingShortcodeStats = (shortcodes, socket) => {
  shortcodes.forEach(function(code) {
    setTimeout(() => {
      fetch(API_URL + code + "/stats", {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(json => {
          socket.emit("url_stats_updadte", {
            payload: {
              shortcode: code,
              visits: json.redirectCount,
              lastVisit: json.lastSeenDate,
              startDate: json.startDate
            }
          });
        });
    }, 300);
  });
};
