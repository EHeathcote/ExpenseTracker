import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./ExpenseList.css";

function ExpenseList(props) {
  // relay year chosen in date filter to ExpenseList component and store in a state
  const [dateFilter, setDateFilter] = useState("2020");

  const recordDateFilterSelect = (selectedDate) => {
    setDateFilter(selectedDate);
    console.log(selectedDate);
  };
  // console.log(props);
  return (
    <div>
      <Card className="expenses">
        {/* a controlled component - means a value used in the component is passed on to a parent component through props and is recieved from the parent component-the parent expenselist component controls the expensesfilter component*/}
        <ExpensesFilter
          onDateSelect={recordDateFilterSelect}
          selected={dateFilter}
        />
        {/* use map  array method to transform array of objects into an array of jsx elements*/}
        {props.expenseList.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default ExpenseList;
