import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Submit from "../../components/Submit";
import { actions } from "../../reducers";

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit: (event, url) => {
    if (event.target.checkValidity()) {
      event.preventDefault();
      dispatch(actions.shortenUrl(url));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Submit);
