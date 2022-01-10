import React, { useState } from "react";
import "./addform.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { categories } from "../../constants/addExpense";
import { addExpense } from "../../Redux/actions/expenses";
import { ToastContainer } from "react-toastify";

const AddForm = () => {
  const cat = categories;
  const [categoryIsopen, setCategoryIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
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
      console.log("No data");
      return;
    }

    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };

    dispatch(addExpense(data));
  };
  return (
    <>
      <div className="addForm">
        <ToastContainer
          postion="bottom-left"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closedOnClick
        />

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
            value={amount}
            placeholder="Enter Amount"
            onChange={(e) => handleAmount(e)}
          />
        </div>
        <div className="catergoryContainer">
          <div className="category">
            <div
              className="category-dropdown"
              onClick={() => setCategoryIsOpen(!categoryIsopen)}
            >
              <label> Cateogry </label>
              <FontAwesomeIcon icon={faCaretDown} />
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
                    <label> {category ? category.title : "Category"}</label>
                    <img src={category.icon} alt={category.title} />
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
        </div>
      </div>
    </>
  );
};

export default AddForm;
