import React, { useState } from "react";
import "./topfold.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlusCircle,
  faChevronLeft,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchExpense } from "../../Redux/actions/expenses";

const TopFold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
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
          <Link to="/add-expense">
            <div className="addButton">
              <FontAwesomeIcon icon={faPlusCircle} />
              <label> Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="addTopFold">
          <Link to="/">
            <div className="addTopFoldButton">
              <FontAwesomeIcon icon={faChevronLeft} />
              <label> Back</label>
            </div>
          </Link>
          <Link to="/">
            <div className="addTopFoldButton">
              <FontAwesomeIcon icon={faTimesCircle} />
              <label> Cancel </label>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopFold;
