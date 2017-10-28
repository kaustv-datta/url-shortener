import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "../../components/Header";
import SubmitContainer from "../SubmitContainer";
import URLListContainer from "../URLListContainer";

const App = () => {
  return (
    <section id="app-container">
      <Header />
      <SubmitContainer />
      <URLListContainer />
    </section>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

App.propTypes = {};

export default App;
