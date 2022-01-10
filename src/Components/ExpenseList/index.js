import React from "react";
import Card from "../../Components/ExpenseList/Card";

const ExpenseList = () => {
  const list = [
    {
      title: "Dummy title",
      logo: "Dummy logo",
      createdAt: Date.now(),
      amount: 123,
    },
  ];

  return (
    <div>{list.length ? list.map((item) => <Card item={item} />) : null}</div>
  );
};

export default ExpenseList;
