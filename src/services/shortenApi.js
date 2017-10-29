// const API_URL = "https://impraise-shorty.herokuapp.com/";
const API_URL = "http://localhost:80";
const io = require("socket.io-client");

export const fetchShortcode = url => {
  return fetch(API_URL + "/shorten", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      url
    })
  }).then(resp => resp.json());
};

const socket = io.connect("http://localhost");
socket.on("news", function(data) {
  console.log(data);
  socket.emit("my other event", { my: "data" });
});
