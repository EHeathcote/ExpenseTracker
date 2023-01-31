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
        <ExpenseItem
          title={props.expenseList[0].title}
          amount={props.expenseList[0].amount}
          date={props.expenseList[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenseList[1].title}
          amount={props.expenseList[1].amount}
          date={props.expenseList[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenseList[2].title}
          amount={props.expenseList[2].amount}
          date={props.expenseList[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenseList[3].title}
          amount={props.expenseList[3].amount}
          date={props.expenseList[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default ExpenseList;
