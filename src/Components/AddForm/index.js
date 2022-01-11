import React, { useState } from "react";
import "./addform.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { categories } from "../../constants/addExpense";
import { addExpense } from "../../Redux/actions/expenses";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalSuccess from "../AddForm/ModalSuccess";

const AddForm = () => {
  const cat = categories;
  const [categoryIsopen, setCategoryIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };

  const handleCategory = (category) => {
    setCategory(category);
    setCategoryIsOpen(false);
  };
  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("Please enter Valid data");
      notify();
      return;
    }

    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };

    dispatch(addExpense(data));
    setModalOpen(true);
  };
  return (
    <>
      <div className="addForm">
        <div className="formItem">
          <label> Title</label>
          <input
            placeholder="Name of expense"
            value={title}
            onChange={(e) => handleTitle(e)}
          />
        </div>
        <div className="formItem">
          <label> Amount $</label>
          <input
            className="amount-input"
            value={amount}
            placeholder="Enter Amount"
            onChange={(e) => handleAmount(e)}
          />
        </div>
        <div className="categoryContainer">
          <div className="category">
            <div
              className="category-dropdown"
              onClick={() => setCategoryIsOpen(!categoryIsopen)}
            >
              <label> {category ? category.title : "Category"} </label>
              <FontAwesomeIcon icon={faCaretDown} className="dropdownicon" />
            </div>
            {categoryIsopen && (
              <div className="categoriesContainer">
                {cat.map((category) => (
                  <div
                    className="category-item"
                    style={{ borderRight: `5px solid ${category.color}` }}
                    key={category.id}
                    onClick={() => handleCategory(category)}
                  >
                    <label> {category.title}</label>
                    <img
                      className="category-image"
                      src={category.icon}
                      alt={category.title}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="addFormButton">
            <div onClick={handleSubmit}>
              <label> ADD </label>
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
          </div>
          <ToastContainer
            position="bottom-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
          />
          <ModalSuccess modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
      </div>
    </>
  );
};

export default AddForm;
