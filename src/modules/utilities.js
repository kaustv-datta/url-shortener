import moment from "moment";
import copy from "copy-to-clipboard";

/**
 * Get time difference
 * @param  {} dateStr date to calculate relative difference with
 */
export const relativeTime = dateStr => {
  return moment(dateStr).fromNow();
};

/**
 * Utility method to copy text to clipboard
 * @param  {} text text to copy
 */
export const copyToClipboard = text => {
  copy(text);
};
