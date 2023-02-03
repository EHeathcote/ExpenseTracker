import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  // relay year chosen in date filter to Expenses component and store in a state
  const [filteredYear, setFilteredYear] = useState("2020");
  // updating the state of the select filter to match the value of the chosen option from the dropdown
  const recordDateFilterSelect = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // create copy of expenses array filtered by selected year;
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === parseInt(filteredYear);
  });

  return (
    <div>
      <Card className="expenses">
        {/* a controlled component - means a value used in the component is passed on to a parent component through props and is recieved from the parent component-the parent expenses component controls the expensesfilter component*/}
        <ExpensesFilter
          onDateSelect={recordDateFilterSelect}
          selected={filteredYear}
        />
        {/* use map  array method to transform array of objects into an array of jsx elements,  could  use ternary operator to display conditional message or abuse the js && operator which only allows right side to occur if left is true or move logic above, as shown*/}
        <ExpenseList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
