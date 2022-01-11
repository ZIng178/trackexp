import React from "react";
import Card from "../../Components/ExpenseList/Card";
import { useSelector } from "react-redux";
import "./expenseList.css";
import { toast, ToastContainer } from "react-toastify";

const ExpenseList = () => {
  const { expenseList, query } = useSelector((state) => state.expenses);
  const filteredList = expenseList.filter((item) => item.title.includes(query));
  console.log("expenseList", expenseList);

  const successNotification = () => toast.success("expense deleted");

  return (
    <div className="expenseList">
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filteredList.length ? (
        filteredList.map((item) => (
          <Card item={item} successNotification={successNotification} />
        ))
      ) : (
        <div className="emptystate">
          <img
            src={require("../../assets/nodata.png")}
            alt="emptylist"
            className="emptyimage"
          />
          <label> Oops ! Your Expense list is Empty </label>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
