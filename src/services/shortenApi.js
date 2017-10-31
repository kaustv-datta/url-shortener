import { put } from "redux-saga/effects";
import { PROXY_URL } from "../configs";
import { actions } from "../reducers";

export const fetchShortcode = url => {
  return fetch(PROXY_URL + "/shorten", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      url
    })
  })
    .then(response => {
      if (!response.ok) {
        put(actions.setErrorState(response.statusText));
      }
      return response;
    })
    .then(resp => resp.json());
};
