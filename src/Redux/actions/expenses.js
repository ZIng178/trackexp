import { ADD_EXPENSE, DELETE_EXPENSE } from "../action-types/expenses";

export const addExpense = (data) => {
  // console.log("data", data);
  return {
    type: ADD_EXPENSE,
    data: data,
  };
};

export const deleteExpense = () => {
  return {
    type: DELETE_EXPENSE,
    data: data,
  };
};
