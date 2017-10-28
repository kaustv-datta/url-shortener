export const types = {
  LOAD_HISTORY: "APP/LOAD_HISTORY",
  SHORTEN_URL: "APP/SHORTEN_URL",
  SHORTEN_SUCCESS: "APP/SHORTEN_SUCCESS",
  SHORTEN_FAIL: "APP/SHORTEN_FAIL"
};

export const initialState = {
  urlList: [],
  urlInputValue: "",
  isLoading: true,
  isError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_HISTORY:
      return { ...state, urlList: [] };

    default:
      return state;
  }
};

export const actions = {
  loadHistory: () => ({ type: types.LOAD_HISTORY }),
  shortenUrl: url => ({
    type: types.SHORTEN_URL,
    payload: { url }
  })
};
