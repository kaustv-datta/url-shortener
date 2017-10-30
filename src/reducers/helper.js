import { getShortcodeCache } from "../services/localStorageApi";

export const createUrlItem = url => {
  const shortcodeCache = getShortcodeCache(url.shortcode);

  return {
    shortDomain: shortcodeCache.shortUrlDomain,
    longUrl: shortcodeCache.longUrl,
    visits: url.visits,
    lastVisit: url.lastVisit,
    startDate: url.startDate
      ? new Date(url.startDate).getTime()
      : new Date().getTime()
  };
};
