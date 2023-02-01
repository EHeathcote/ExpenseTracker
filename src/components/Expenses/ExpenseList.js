import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./ExpenseList.css";

function ExpenseList(props) {
  // relay year chosen in date filter to ExpenseList component and store in a state
  const [filteredYear, setFilteredYear] = useState("2020");
  // updating the state of the select filter to match the value of the chosen option from the dropdown
  const recordDateFilterSelect = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // create copy of expenses array filtered by selected year;
  const filteredExpenses = props.expenseList.filter((expense) => {
    return expense.date.getFullYear() === parseInt(filteredYear);
  });

  return (
    <div>
      <Card className="expenses">
        {/* a controlled component - means a value used in the component is passed on to a parent component through props and is recieved from the parent component-the parent expenselist component controls the expensesfilter component*/}
        <ExpensesFilter
          onDateSelect={recordDateFilterSelect}
          selected={filteredYear}
        />
        {/* use map  array method to transform array of objects into an array of jsx elements*/}
        {filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default ExpenseList;
