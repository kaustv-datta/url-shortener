import React, { Component } from "react";

export class Submit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form id="submit-form" onSubmit={handleSubmit}>
        <input
          id="url-input"
          type="url"
          placeholder="Paste the link you want to shorten here"
          value={this.state.value}
          onChange={this.handleChange}
          required
        />
        <input
          type="submit"
          value="Shorten this link"
          disabled={this.state.value === ""}
        />
      </form>
    );
  }
}

export default Submit;
