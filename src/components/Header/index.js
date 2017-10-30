import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header id="header-container">
      <h1 id="app-header" className="logo">
        Shooooort
      </h1>
      <h2 id="app-sub-header" className="normal-text">
        The link shortener with a long name
      </h2>
    </header>
  );
};

export default Header;
