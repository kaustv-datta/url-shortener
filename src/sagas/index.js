import { call, put, takeEvery, takeLatest, fork } from "redux-saga/effects";
import { types } from "../reducers";
import { fetchShortcode } from "../services/shortenApi";
import {
  handleNewUrl,
  getAllShortcodesCache
} from "../services/localStorageApi";
import websocketSagas, { pongShortcodes } from "./websocket";

function* fetchCode(action) {
  try {
    const data = yield call(fetchShortcode, action.payload.url);
    yield put({ type: types.SHORTEN_SUCCESS, data });
    const shortcodes = yield call(handleNewUrl, data);
    yield call(pongShortcodes, shortcodes);
  } catch (e) {
    yield put({ type: types.SHORTEN_FAIL, message: e.message });
  }
}

function* rootSaga() {
  yield [
    fork(websocketSagas),
    takeLatest(types.SHORTEN_URL, fetchCode),
    fork(pongShortcodes, getAllShortcodesCache())
  ];
}

export default rootSaga;
