import React from "react";
import Card from "../../Components/ExpenseList/Card";
import { useSelector } from "react-redux";
import "./expenseList.css";

const ExpenseList = () => {
  const { expenseList } = useSelector((state) => state.expenses);
  console.log("expenseList", expenseList);

  return (
    <div className="expenseList">
      {expenseList.length ? (
        expenseList.map((item) => <Card item={item} />)
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
