import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Submit.css";

export class Submit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Event handler to keep state in sync with input value
   * @param event input text change event
   */
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        id="submit-form"
        onSubmit={event => {
          handleSubmit(event, this.state.value);
        }}
      >
        <input
          id="url-input"
          className="normal-text round-border"
          type="url"
          placeholder="Paste the link you want to shorten here"
          value={this.state.value}
          onChange={this.handleChange}
          required
        />
        <input
          id="url-submit-btn"
          className="normal-text round-border link"
          type="submit"
          value="Shorten this link"
          disabled={this.state.value === ""}
        />
      </form>
    );
  }
}

Submit.propTypes = {
  handleSubmit: PropTypes.func
};

export default Submit;
