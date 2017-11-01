import React from "react";
import PropTypes from "prop-types";

import { copyToClipboard } from "../../modules/utilities";
import { APP_STATUS } from "../../reducers";

import "./URLList.css";

const URLList = ({ list, onClearClick, activeShortcode, appState }) => {
  if (appState === APP_STATUS.EMPTY) {
    return <div id="app-empty-status" className="app-status-icon" />;
  } else if (
    appState === APP_STATUS.LOADING ||
    appState === APP_STATUS.WS_LOADING
  ) {
    return <div id="app-loading-status" className="app-status-icon" />;
  } else if (appState === APP_STATUS.ERROR) {
    return <div id="app-error-status" className="app-status-icon" />;
  } else {
    return (
      <div id="url-list-container">
        <h3 id="url-list-header" className="section-heading">
          Previously shortened by you
        </h3>
        <button
          id="clear-history-btn"
          className="normal-text link"
          type="button"
          onClick={onClearClick}
        >
          Clear history
        </button>
        <table id="url-list">
          <thead className="table-headings">
            <tr>
              <th>LINK</th>
              <th>VISITS</th>
              <th>LAST VISITED</th>
            </tr>
          </thead>
          <tbody>
            {list.map(url => {
              return (
                <tr
                  key={url.shortcode}
                  onClick={() =>
                    copyToClipboard(url.shortDomain + url.shortcode)}
                >
                  <td
                    className={
                      activeShortcode === url.shortcode ? "new-link" : ""
                    }
                  >
                    <span className="normal-text click-hint">
                      Click to copy this link
                    </span>
                    <br />
                    <span className="url-body">
                      {url.shortDomain}
                      <span className="url-shortcode">{url.shortcode}</span>
                    </span>
                    <br />
                    <span className="url-longcode normal-text">
                      {url.longUrl}
                    </span>
                  </td>
                  <td className="normal-text">{url.visits}</td>
                  <td className="normal-text">{url.lastVisit}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

URLList.propTypes = {
  list: PropTypes.array,
  onClearClick: PropTypes.func,
  activeShortcode: PropTypes.string,
  appState: PropTypes.string
};

URLList.defaultProps = {
  list: [],
  activeShortcode: "",
  appState: ""
};

export default URLList;
