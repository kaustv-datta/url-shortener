import { createUrlItem } from "./helper";
import { clearCache } from "../services/localStorageApi";

export const types = {
  LOAD_HISTORY: "APP/LOAD_HISTORY",
  SHORTEN_URL: "APP/SHORTEN_URL",
  SHORTEN_SUCCESS: "APP/SHORTEN_SUCCESS",
  SHORTEN_FAIL: "APP/SHORTEN_FAIL",
  URL_STATS_UPDATE: "WS/URL_STATS_UPDATE",
  CLEAR_HISTORY: "APP/CLEAR_HISTORY"
};

export const initialState = {
  urlList: {},
  urlInputValue: "",
  isLoading: true,
  isError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_HISTORY:
      return { ...state, urlList: {} };

    case types.SHORTEN_SUCCESS:
      return {
        ...state,
        urlList: Object.assign({}, state.urlList, {
          [action.data.shortcode]: {
            shortDomain: action.data.api,
            longUrl: action.data.long_url,
            visits: 0
          }
        })
      };

    case types.URL_STATS_UPDATE:
      return {
        ...state,
        urlList: Object.assign({}, state.urlList, {
          [action.payload.shortcode]: createUrlItem(action.payload)
        })
      };

    case types.CLEAR_HISTORY:
      clearCache();
      return { ...state, urlList: {} };

    default:
      return state;
  }
};

export const actions = {
  loadHistory: () => ({ type: types.LOAD_HISTORY }),
  shortenUrl: url => ({
    type: types.SHORTEN_URL,
    payload: { url }
  }),
  clearHistory: () => ({ type: types.CLEAR_HISTORY })
};
