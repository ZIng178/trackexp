import React from "react";
import ExpenseList from "../../Components/ExpenseList";
import TopFold from "../../Components/TopFolder/index";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <TopFold />
      <ExpenseList />
    </div>
  );
};

export default Home;
