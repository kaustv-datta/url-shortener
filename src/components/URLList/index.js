import React from "react";

const URLList = ({ list = [] }) => {
  return (
    <div id="url-list-container">
      <h3 id="url-list-header">Previously shortened by you</h3>
      <button type="button">Clear history</button>
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
              <tr>
                <td>{url.shortened}</td>
                <td>{url.redirectCount}</td>
                <td>{url.lastSeenDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default URLList;
