import moment from "moment";

export const relativeTime = dateStr => {
  return moment(dateStr).fromNow();
};
