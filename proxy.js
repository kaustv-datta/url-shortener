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

// POST /shorten API
app.post("/shorten", cors(), (req, res, next) => {
  fetch(API_URL + "shorten", {
    method: "post",
    body: JSON.stringify({
      url: req.body.url
    })
  })
    .then(handleErrors)
    .then(res => res.json())
    .then(json =>
      res.send(
        Object.assign({}, json, { api: API_URL, long_url: req.body.url })
      )
    )
    .catch(error => console.log(error));
});

const server = app.listen(TARGET_PORT, () => {
  console.log("CORS-enabled web server listening on port " + TARGET_PORT);
});

// Websocket to keep client updated with push notifications
const io = require("socket.io").listen(server);
let timerId = null;
let shortcodeCache = [];

// Server socket
io.on("connection", function(socket) {

  socket.on("url_stats", data => {

    shortcodeCache = data.payload;
    // Clear old timer
    if (timerId !== null) clearInterval(timerId);
    // Set timer interval of 10 sec
    timerId = setInterval(() => {
      pingShortcodeStats(socket);
    }, 10000);
  });
});

// GET /:shortcode/stats API
const pingShortcodeStats = (socket) => {
  shortcodeCache.forEach(function(code) {
    setTimeout(() => {
      fetch(API_URL + code + "/stats", {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(handleErrors)
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
        })
        .catch(error => console.log(error));
    }, 300);
  });
};

// Handle API fetch errors
const handleErrors = response => {
  if (!response.ok) throw Error(response.statusText);
  return response;
};
