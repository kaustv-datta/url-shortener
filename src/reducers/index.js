import { createUrlItem } from "./helper";
import { clearCache } from "../services/localStorageApi";

// Dispatcher actions
export const types = {
  LOAD_HISTORY: "APP/LOAD_HISTORY",
  SHORTEN_URL: "APP/SHORTEN_URL",
  SHORTEN_SUCCESS: "APP/SHORTEN_SUCCESS",
  SHORTEN_FAIL: "APP/SHORTEN_FAIL",
  URL_STATS_UPDATE: "WS/URL_STATS_UPDATE",
  CLEAR_HISTORY: "APP/CLEAR_HISTORY",
  SET_DEFAULT_APP_STATE: "APP/DEFAULT_STATE",
  SET_LOADING_STATE: "APP/LOADING_STATE",
  SET_ERROR_STATE: "APP/ERROR_STATE",
  SET_EMPTY_STATE: "APP/EMPTY_STATE",
  CHANGE_APP_STATE: "APP/CHANGE_STATE"
};

// Application statuses
export const APP_STATUS = {
  DEFAULT: "STATUS/APP_DEFAULT",
  EMPTY: "STATUS/APP_EMPTY",
  ERROR: "STATUS/APP_ERROR",
  LOADING: "STATUS/APP_LOADING"
};

export const initialState = {
  urlList: {},
  currentShortCode: "",
  appStatus: APP_STATUS.EMPTY
};

/**
 * Redux reducer
 * @param  state app state
 * @param  action dispatched action
 */
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
            visits: 0,
            startDate: new Date().getTime()
          }
        }),
        currentShortCode: action.data.shortcode
      };

    case types.URL_STATS_UPDATE:
      return {
        ...state,
        urlList: Object.assign({}, state.urlList, createUrlItem(action.payload))
      };

    case types.CLEAR_HISTORY:
      clearCache();
      return { ...state, urlList: {} };

    case types.CHANGE_APP_STATE:
      return { ...state, appStatus: action.data };

    default:
      return state;
  }
};

// Action creators
export const actions = {
  loadHistory: () => ({ type: types.LOAD_HISTORY }),
  shortenUrl: url => ({
    type: types.SHORTEN_URL,
    payload: { url }
  }),
  clearHistory: () => ({ type: types.CLEAR_HISTORY }),
  setDefaultState: () => ({
    type: types.CHANGE_APP_STATE,
    data: APP_STATUS.DEFAULT
  }),
  setLoadingState: () => ({
    type: types.CHANGE_APP_STATE,
    data: APP_STATUS.LOADING
  }),
  setErrorState: () => ({
    type: types.CHANGE_APP_STATE,
    data: APP_STATUS.ERROR
  }),
  setEmptyState: () => ({
    type: types.CHANGE_APP_STATE,
    data: APP_STATUS.EMPTY
  })
};
