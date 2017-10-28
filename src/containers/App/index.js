import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export const App = () => {
  return <h1>Shooooort</h1>;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

App.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
