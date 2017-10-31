import { CACHE_KEY } from "../configs";

/**
 * Save shorten api response in localStorage
 * @param urlObj api response
 */
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

/**
 * Fetch shortcode details from localStorage
 * @param shortcode
 */
export const getShortcodeCache = shortcode => {
  const localCache = JSON.parse(localStorage.getItem(CACHE_KEY));

  return localCache[shortcode];
};

/**
 * Fetch all shortcodes from cache
 */
export const getAllShortcodesCache = () => {
  const localCache = JSON.parse(localStorage.getItem(CACHE_KEY));
  let shortcodes = [];

  if (localCache) {
    shortcodes = Object.keys(localCache);
  }

  return shortcodes;
};

export const clearCache = () => {
  localStorage.removeItem(CACHE_KEY);
};
