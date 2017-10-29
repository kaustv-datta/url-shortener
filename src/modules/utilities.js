import moment from "moment";
import copy from "copy-to-clipboard";

export const relativeTime = dateStr => {
  return moment(dateStr).fromNow();
};

export const copyToClipboard = text => {
  copy(text);
};
