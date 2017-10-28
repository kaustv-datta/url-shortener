import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { types } from "../reducers";
import { fetchShortcode } from "../services/shortenApi";

function* fetchCode(action) {
  try {
    const data = yield call(fetchShortcode, action.payload.url);
    yield put({ type: types.SHORTEN_SUCCESS, data });
  } catch (e) {
    yield put({ type: types.SHORTEN_FAIL, message: e.message });
  }
}

function* getShortcodeSaga() {
  yield takeLatest(types.SHORTEN_URL, fetchCode);
}

export default getShortcodeSaga;
