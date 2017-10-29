import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import URLList from "../../components/URLList";
import { relativeTime } from "../../modules/utilities";

const mapStateToProps = state => ({
  list: Object.keys(state.urlList).map(shortcode => {
    let urlItem = Object.assign({}, state.urlList[shortcode]);
    urlItem.shortcode = shortcode;

    if (urlItem.lastVisit === undefined) {
      urlItem.lastVisit = "NA";
    } else {
      urlItem.lastVisit = relativeTime(urlItem.lastVisit);
    }

    return urlItem;
  })
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(URLList);
