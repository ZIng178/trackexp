import React from "react";
import AddForm from "../../Components/AddForm";
import TopFold from "../../Components/TopFolder";
import "./addexpense.css";

const AddExpense = () => {
  return (
    <div className="addexpense">
      <TopFold />
      <AddForm />
    </div>
  );
};

export default AddExpense;
