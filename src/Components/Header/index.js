import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          TRACKEXP
          <FontAwesomeIcon icon={faMoneyCheckAlt} />
        </div>
      </div>
      <div className="headerButton">
        <a
          href="https://github.com/ZIng178"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
    </div>
  );
};

export default Header;
