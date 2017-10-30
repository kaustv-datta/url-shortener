import { call, put, takeEvery, takeLatest, fork } from "redux-saga/effects";
import { types, actions } from "../reducers";
import { fetchShortcode } from "../services/shortenApi";
import {
  handleNewUrl,
  getAllShortcodesCache
} from "../services/localStorageApi";
import websocketSagas, { pongShortcodes, watchPollData } from "./websocket";

function* fetchCode(action) {
  try {
    const data = yield call(fetchShortcode, action.payload.url);
    yield put({ type: types.SHORTEN_SUCCESS, data });
    yield put(actions.setDefaultState());
    const shortcodes = yield call(handleNewUrl, data);
    yield call(pongShortcodes, shortcodes);
  } catch (e) {
    yield put({ type: types.SHORTEN_FAIL, message: e.message });
    yield put(actions.setErrorState());
  }
}

function* rootSaga() {
  yield [
    fork(websocketSagas),
    takeLatest(types.SHORTEN_URL, fetchCode),
    put(actions.setLoadingState()),
    fork(pongShortcodes, getAllShortcodesCache()),
    fork(watchPollData)
  ];
}

export default rootSaga;
