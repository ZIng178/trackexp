import moment from "moment";
import React from "react";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../Redux/actions/expenses";

const Card = ({ item, successNotification }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteExpense(item));
    successNotification();
  };

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
          <p className="cardInfoTitle"> {item.title}</p>
          <p className="cardTime">{time}</p>
        </div>
        <div className="cardRight">
          <label className="cardAmount">${item.amount}</label>
        </div>
        <div className="delete" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </div>
    </>
  );
};

export default Card;
