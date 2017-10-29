import React from "react";

const URLList = ({ list = [], onClearClick }) => {
  return (
    <div id="url-list-container">
      <h3 id="url-list-header">Previously shortened by you</h3>
      <button type="button" onClick={onClearClick}>
        Clear history
      </button>
      <table id="url-list">
        <thead>
          <tr>
            <th>LINK</th>
            <th>VISITS</th>
            <th>LAST VISITED</th>
          </tr>
        </thead>
        <tbody>
          {list.map(url => {
            return (
              <tr key={url.shortcode}>
                <td>
                  <p>
                    {url.shortDomain}
                    <span>{url.shortcode}</span>
                  </p>
                  <span>{url.longUrl}</span>
                </td>
                <td>{url.visits}</td>
                <td>{url.lastVisit}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default URLList;
