// const API_URL = "https://impraise-shorty.herokuapp.com/";
const API_URL = "http://localhost:80";

export const fetchShortcode = url => {
  return fetch(API_URL + "/shorten", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      url
    })
  });
};
