import moment from "moment";
import React from "react";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Card = ({ item }) => {
  const time = moment(item.createdAt).fromNow();
  console.log("item", item);
  return (
    <>
      <div
        className="card"
        style={{ borderRight: `6px solid ${item.category.color} ` }}
      >
        <div className="card-image-container">
          <img
            src={item.category.icon}
            alt={item.category.title}
            className="cardImage"
          />
        </div>
        <div className="cardInfo">
          <p> {item.title}</p>
          <p>{time}</p>
        </div>
        <div className="cardRight">
          <label className="cardAmount">${item.amount}</label>
        </div>
        <div className="delete">
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </div>
    </>
  );
};

export default Card;
