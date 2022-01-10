import React, { useState } from "react";
import "./topfold.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlusCircle,
  faChevronLeft,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const TopFold = () => {
  const [query, setQuery] = useState("");

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="hometopFold">
          <div className="searchBar">
            <FontAwesomeIcon icon={faSearch} className="searchIcon" />
            <input
              type="text"
              placeholder="Search Expenses"
              value={query}
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <div className="addButton">
            <FontAwesomeIcon icon={faPlusCircle} />
            <label> Add</label>
          </div>
        </div>
      ) : (
        <div className="addTopFold">
          <div className="addTopFoldButton">
            <FontAwesomeIcon icon={faChevronLeft} />
            <label> Back</label>
          </div>

          <div className="addTopFoldButton">
            <FontAwesomeIcon icon={faTimesCircle} />
            <label> Cancel </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopFold;
