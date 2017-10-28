import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Submit from "../../components/Submit";

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit: event => {
    if (event.target.checkValidity()) {
      event.preventDefault();
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Submit);
