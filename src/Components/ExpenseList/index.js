import React from "react";
import Card from "../../Components/ExpenseList/Card";
import { useSelector } from "react-redux";
import "./expenseList.css";
import { toast, ToastContainer } from "react-toastify";

const ExpenseList = () => {
  const { expenseList } = useSelector((state) => state.expenses);
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
      {expenseList.length ? (
        expenseList.map((item) => (
          <Card item={item} successNotification={successNotification} />
        ))
      ) : (
        <div className="emptystate">
          <img
            src={require("../../assets/success.png")}
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
