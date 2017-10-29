import { take, put, call, apply, fork } from "redux-saga/effects";
import { eventChannel, delay } from "redux-saga";
import io from "socket.io-client";
import { PROXY_URL } from "../configs";
import { types } from "../reducers";

export let WEB_SOCKET = null;

const createWebSocketConnection = () => {
  WEB_SOCKET = io.connect(PROXY_URL);
  return WEB_SOCKET;
};

function createSocketChannel(socket) {
  return eventChannel(emit => {
    const pingHandler = event => {
      if (event.payload) emit(event.payload);
    };

    socket.on("url_stats_updadte", pingHandler);

    const unsubscribe = () => {
      socket.off("url_stats_updadte", pingHandler);
    };

    return unsubscribe;
  });
}

export function* pongShortcodes(shortcodes) {
  if (shortcodes && shortcodes.length > 0) {
    yield apply(WEB_SOCKET, WEB_SOCKET.emit, [
      "url_stats",
      { payload: shortcodes }
    ]);
  }
}

export default function* websocketSagas() {
  const socket = yield call(createWebSocketConnection);
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    const payload = yield take(socketChannel);
    yield put({ type: types.URL_STATS_UPDATE, payload });
    // yield fork(pongShortcodes);
  }
}
