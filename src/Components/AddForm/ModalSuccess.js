import React from "react";
import Modal from "react-modal";
import "./ModalSuccess.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ModalSuccess = ({ modalOpen, setModalOpen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#3e065f",
      borderRadius: "12px",
    },
  };
  return (
    <>
      <Modal isOpen={modalOpen} style={customStyles} ariaHideApp={false}>
        <div className="innermodal">
          <label> Success!! Expense is now Added </label>
          <img
            src={require("../../assets/success.png")}
            alt="expenseadded"
            className="addedImage"
          />
          <Link to="/">
            <div className="modalhomebutton">
              <FontAwesomeIcon icon={faHome} />
              Home
            </div>
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default ModalSuccess;
