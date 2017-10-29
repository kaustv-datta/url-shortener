import { CACHE_KEY } from "../configs";

export const handleNewUrl = urlObj => {
  let localCache = JSON.parse(localStorage.getItem(CACHE_KEY));

  if (localCache === null) {
    localCache = {};
  }

  localCache[urlObj.shortcode] = {
    shortUrlDomain: urlObj.api,
    longUrl: urlObj.long_url
  };

  localStorage.setItem(CACHE_KEY, JSON.stringify(localCache));

  return Object.keys(localCache);
};

export const getShortcodeCache = shortcode => {
  const localCache = JSON.parse(localStorage.getItem(CACHE_KEY));

  return localCache[shortcode];
};

export const getAllShortcodesCache = () => {
  const localCache = JSON.parse(localStorage.getItem(CACHE_KEY));
  let shortcodes = [];

  if (localCache) {
    shortcodes = Object.keys(localCache);
  }

  return shortcodes;
};
