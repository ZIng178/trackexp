import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import AddExpense from "./Pages/Add-Expense";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add-expense" element={<AddExpense />} />
      </Routes>

      <div> Footer</div>
    </Router>
  );
}

export default App;
