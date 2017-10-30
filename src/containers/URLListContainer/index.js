import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import URLList from "../../components/URLList";
import { relativeTime } from "../../modules/utilities";
import { actions } from "../../reducers";

const mapStateToProps = state => ({
  list: Object.keys(state.urlList)
    .map(shortcode => {
      let urlItem = Object.assign({}, state.urlList[shortcode]);
      urlItem.shortcode = shortcode;

      if (urlItem.lastVisit === undefined) {
        urlItem.lastVisit = "NA";
      } else {
        urlItem.lastVisit = relativeTime(urlItem.lastVisit);
      }

      return urlItem;
    })
    .sort((a, b) => {
      return b.startDate - a.startDate;
    }),
  activeShortcode: state.currentShortCode,
  appState: state.appStatus
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClearClick: () => {
    dispatch(actions.clearHistory());
    dispatch(actions.setEmptyState());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(URLList);
